const router = require('express').Router();

const Family = require('./familyModel.js');

// const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
  Family.find()
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  Family.findById(req.params.id)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  Family.add(req.body)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.put('/:id',  (req, res) => {
  Family.update(req.params.id, req.body)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteMember = await Family.remove(req.params.id);
    res.status(200).json(deleteMember);
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting Member',
    });
  }
});

module.exports = router;