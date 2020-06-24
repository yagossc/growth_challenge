const request = require('supertest');
const server = require('../server');

describe("GET /posts", function(){

    it("get the challenge's target posts", async function(done){
        await server.init();

        let app = server.get().app;

        request(app).
            get('/posts').
            set('Accept', 'application/json').
            expect('Content-Type', /json/).
            expect(200).
            end(function(err, res){
                    if(err) return done(err);
                    done();
            });
    });

})
