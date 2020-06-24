const p = require('./posts');

module.exports.setup = function(app) {
    app.get("/posts", p.getPosts);
}
