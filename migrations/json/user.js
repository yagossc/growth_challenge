var fs = require('fs');
var usersBase = JSON.parse(fs.readFileSync('users.json', 'utf8'));

usersBase.forEach((entry, index) => {
    console.log("INSERT INTO user_account(user_name, user_uname, user_email, address_id, user_phone, user_website, company_id)\n"+
                "VALUES('"+
                entry.name+"', '"+
                entry.username+"', '"+
                entry.email+"', '"+
                (index+1)+"', '"+
                entry.phone+"', '"+
                entry.website+"', '"+
                (index+1)+"');\n");
});
