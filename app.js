var express = require('express');
var app = express();

app.listen(3000,function(){
    console.log('App is listening on 3000.')
})

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});