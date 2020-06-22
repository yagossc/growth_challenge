module.exports.setup = function(app) {
    app.get("/posts", function(req, res){
        res.json({message: "Hellow Growth!"});
    });
}
