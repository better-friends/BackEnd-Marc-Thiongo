const router = require('express').Router();

const Family = require('./familyModel.js');

const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Family.find()
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  Family.findById(req.params.id)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
  Family.add(req.body)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.put('/:id', restricted,  (req, res) => {
  Family.update(req.params.id, req.body)
    .then(family => {
      res.json(family);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', restricted, async (req, res) => {
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