var supertest = require('supertest');
var app = require('../index');

var request = supertest(app);

describe('API', function(){
    before(function(){});

    describe('GET /api', function(){
	it('should return something', function(done){
	    request.get('/api').expect(200, done);
	});
    });

    describe('GET /api/users', function(){
	it('should return something too', function(done){
	    request.get('/api/users').expect(200, done);
	});
    });
});
