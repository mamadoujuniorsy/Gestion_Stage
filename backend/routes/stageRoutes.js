const express = require('express');
const router = express.Router();
const {
  getAllStages,
  createStage,
  updateStage,
  deleteStage,
} = require('../controllers/stageController');

// Get all stages
router.get('/', getAllStages);

// Create a new stage
router.post('/', createStage);

// Update a stage
router.put('/:id', updateStage);

// Delete a stage
router.delete('/:id', deleteStage);

module.exports = router;
