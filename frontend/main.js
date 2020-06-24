import React from 'react';
import ReactDOM from 'react-dom';

const containerStyle = {
    maxWidth: "840px",
    margin: "0 auto",
    padding: "0 15px"
}

const cardStyle = {
    marginBottom: "40px",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,.04)",
    border: "1px solid rgba(0,0,0,.09)",
    borderRadius: "3px",
    cursor: "pointer"
}

const titleStyle = {
    padding: "20px 0px"
}

function Posts(props) {
    const posts = props.posts;
    const allPosts =  posts.map(post => (
        <div style={cardStyle} key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ));

    return(
        <div>
            {allPosts}
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts',
              {
                  method: "GET",
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
              })
            .then(response => response.json())
            .then(posts => {
                this.setState({ posts });
            })
            .catch(err => console.log(err));
    }
    render(){
        if (!this.state.posts)
            return <div>Loading...</div>

        const posts = this.state.posts
        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}>Growth Tech Challenge</h1>
                <Posts posts={posts} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
