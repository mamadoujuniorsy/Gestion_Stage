const express = require('express');
const router = express.Router();
const {
  getAllCandidates,
  createCandidate,
  updateCandidate,
  deleteCandidate,
} = require('../controllers/candidateController');

// Get all candidates
router.get('/', getAllCandidates);

// Create a new candidate
router.post('/', createCandidate);

// Update a candidate
router.put('/:id', updateCandidate);

// Delete a candidate
router.delete('/:id', deleteCandidate);

module.exports = router;
