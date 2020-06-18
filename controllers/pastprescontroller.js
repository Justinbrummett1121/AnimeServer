const express = require('express');
const router = express.Router();
const PastPres = require('../db').import('../models/pastpresanime');

router.post('/', (req, res) => {
    const pastPresFromUser = {
        nameOfAnime: req.body.nameOfAnime,
        lastEpisodeSeen: req.body.lastEpisodeSeen,
        rating1To10: req.body.rating1To10,
        favoriteEpEpsFight: req.body.favoriteEpEpsFight,
        favoriteCharacter: req.body.favoriteCharacter
    }
    PastPres.create(pastPresFromUser)
        .then(pastPres => res.status(200).json({
            pastPres: pastPres
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.get('/', (req, res) => {
    PastPres.findAll()
        .then(pastPres => res.status(200).json({
            pastPres: pastPres
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.get('/:id', (req, res) => {
    PastPres.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(pastPres => res.status(200).json({
            pastPres: pastPres
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.put('/:id', (req, res) => {
    PastPres.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(pastPres => res.status(200).json({
        pastPres: pastPres
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.delete('/:id', (req, res) => {
    PastPres.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(pastPres => res.status(200).json({
        pastPres: pastPres
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;