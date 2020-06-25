const http = require('http');

// GET /posts handler function
module.exports.getPosts = async function(req, res, next) {

    try{
        let posts = await getPosts();
        let users = await getUsers();

        usersObj = JSON.parse(users);
        postsObj = JSON.parse(posts);

        // Filter which users belong to a company that's part of a group
        targetUsers = usersObj.filter(user => user.company.name.includes("Group"));

        targetPosts = [];
        postsObj.forEach(post => {
            targetUsers.forEach(user => {
                if (post.userId == user.id) {
                    let aux = {};
                    aux.author = user.name;
                    aux.company = user.company.name;
                    aux.title = post.title;
                    aux.body = post.body;

                    targetPosts.push(aux);
                }
            })
        });

        res.json(targetPosts);

    }catch(err){
        console.error('Error: '+err.message);
        next(err);
    }
}

function getPosts() {
    var response = '';
    var options = {
        host: "http://jsonplaceholder.typicode.com",
        path: "/posts",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    return new Promise((resolve, reject) => {
        req = http.get("http://jsonplaceholder.typicode.com/posts", (res) => {
            res.on('data', chunk => {
                response+=chunk;
            });

            res.on('abort', () => {
                reject("Connection refused");
            })

            res.on('end', () => {
                resolve(response);
            });
        });

        req.end();
    });
}

function getUsers() {
    var response = '';
    var options = {
        host: "http://jsonplaceholder.typicode.com",
        path: "/users",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }

    return new Promise((resolve, reject) => {
        req = http.get("http://jsonplaceholder.typicode.com/users", res => {
            res.on('data', chunk => {
                response+=chunk;
            });

            res.on('abort', () => {
                reject("Connection refused");
            })

            res.on('end', () => {
                resolve(response);
            });
        });

        req.end();
    });
}
