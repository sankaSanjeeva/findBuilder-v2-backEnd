const express = require('express');
const Builder = require('../schemas/builder');

const router = express.Router();

router.get('/', (req, res, next) => {
  Builder.find((err, builders) => {
    if (err) {
      console.log(err);
      // return next(err);
    }
    res.json(builders);
  });
});

router.get('/:id', (req, res, next) => {
  Builder.findById(req.params.id, (err, builder) => {
    if (err) {
      console.log(err);
      // return next(err);
    }
    res.json(builder);
  });
});

router.post('/', (req, res, next) => {
  Builder.create(req.body, (err, builder) => {
    if (err) {
      console.log(err);
      // return next(err);
    }
    res.json(builder);
  })
})

router.put('/:id', (req, res, next) => {
  Builder.findByIdAndUpdate(req.params.id, req.body, (err, builder) => {
    if (err) {
      console.log(err);
      // return next(err);
    }
    res.json(builder);
  })
})

router.delete('/:id', (req, res, next) => {
  Builder.findByIdAndRemove(req.params.id, req.body, (err, builder) => {
    if (err) {
      console.log(err);
      // return next(err);
    }
    res.json(builder);
  })
})

module.exports = router;
