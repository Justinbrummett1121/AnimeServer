const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/signup', (req, res) => {
    User.create({
        firstname: req.body.firstname,
        emailaddress: req.body.emailaddress,
        username: req.body.username,
        passwordhash: bcrypt.hashSync(req.body.passwordhash)
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                res.json({
                    user: user,
                    message: 'Thanks for joining!',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if(user){
                bcrypt.compare(req.body.passwordhash, user.passwordhash, (err, matches) => {
                    if(matches){
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json({
                            user: user,
                            message: 'You are logged in',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({error: 'bad gatewar'})
                    }
                })
            } else {
                res.status(500).send({error: 'failed to authenticate'})
            }
        }, err => res.status(501).send ({error: 'failed ro process'}))
})

module.exports = router;