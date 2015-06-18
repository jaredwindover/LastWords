var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res){
    res.json({message:'Initial message'});
});

app.use('/api', router);

app.listen(port);

console.log('App running on port ' + port);
