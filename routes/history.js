const express = require('express');
const router = express.Router();

// @route  GET api/history
// @desc   Get all history
// @access Private

router.get('/', (req, res) => {
  res.send('Get all history');
});

// @route  POST api/history
// @desc   Add new history
// @access Private

router.post('/', (req, res) => {
  res.send('Add history');
});

module.exports = router;
