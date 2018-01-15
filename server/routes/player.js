const router = require('express').Router()

const playerDb = require('../db/player')
const {decode} = require('../auth/token')

router.get('/gold', decode, (req, res) => {
  playerDb.getPlayerGold(req.user.user_id)
    .then(({gold}) => res.json(gold))
})

router.put('/gold', decode, (req, res) => {
  console.log(req.body);
  playerDb.getPlayerGold(req.user.user_id)
    .then(({gold}) => {
      playerDb.updatePlayerGold(req.user.user_id, gold + req.body.gold)
        .then(() => res.sendStatus(200))
    })
})

router.post('/weapon', decode, (req, res) => {
  playerDb.addWeapon(req.user.user_id, req.body.name, req.body.level)
    .then(id => res.json(id[0]))
})

router.get('/weapons', decode, (req, res) => {
  playerDb.getWeapons(req.user.user_id)
    .then(weapons => res.json(weapons))
})

module.exports = router
