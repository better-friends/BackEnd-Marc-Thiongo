const router = require('express').Router();

const Users = require('./userModel.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.put('/:id', restricted, (req, res) => {
  Users.update(req.params.id, req.body)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
})

router.delete('/:id', restricted, async (req, res) => {
  try {
    const deleteUser = await Users.remove(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting User',
    });
  }
});

module.exports = router;