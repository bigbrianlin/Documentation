const express = require('express');
const router = express.Router();

const History = require('../models/History');

// @route  GET api/history
// @desc   Get all history
// @access Private

router.get('/', async (req, res) => {
  try {
    const history = await History.find;
    res.json(documents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/history
// @desc   Add new history
// @access Private

router.post('/', (req, res) => {
  res.send('Add history');
});

module.exports = router;
