const express = require('express');
const router = express.Router();

// @route  GET api/documents
// @desc   Get all users documents
// @access Private

router.get('/', (req, res) => {
  res.send('Get all documents');
});

// @route  POST api/documents
// @desc   Add new document
// @access Private

router.post('/', (req, res) => {
  res.send('Add document');
});

// @route  PUT api/documents/:id
// @desc   Update document
// @access Private

router.put('/:id', (req, res) => {
  res.send('Update document');
});

// @route  DELETE api/documents/:id
// @desc   Delete document
// @access Private

router.put('/:id', (req, res) => {
  res.send('Delete document');
});

module.exports = router;
