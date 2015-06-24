var express  = require('express');

var app = express();

var router = express.Router();

router.get('/', function(req, res){
    res.json({message:'Initial message'});
});

app.use('/api', router);

module.exports = app;
