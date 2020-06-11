require('dotenv').config()

const express = require('express');
const app = express();

const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

app.listen(process.env.PORT,function(){
    console.log(`App is listening on ${process.env.PORT}.`)
})

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});