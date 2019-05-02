const router = require('express').Router();

const Friend = require('./friendsModel.js');

// const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
  Friend.find()
    .then(friend => {
      res.json(friend);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  Friend.findById(req.params.id)
    .then(friend => {
      res.json(friend);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  Friend.add(req.body)
    .then(friend => {
      res.json(friend);
    })
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
  Friend.update(req.params.id, req.body)
    .then(friend => {
      res.json(friend);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteFriend = await Friend.remove(req.params.id);
    res.status(200).json(deleteFriend);
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting Friend',
    });
  }
});

module.exports = router;