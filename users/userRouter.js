const router = require('express').Router();

const Users = require('./userModel.js');

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

module.exports = router;