require('dotenv').config()

const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
const pastpres = require('./controllers/pastprescontroller');

const sequelize = require('./db');

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/api/user', user);
app.use(require('./middleware/validate-session'));
app.use('/pastpres', pastpres)

app.listen(process.env.PORT,function(){
    console.log(`App is listening on ${process.env.PORT}.`)
})

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});