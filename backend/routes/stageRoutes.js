const express = require('express');
const router = express.Router();
const {
  getAllStages,
  createStage,
  updateStage,
  deleteStage,
  getStage
} = require('../controllers/stageController');

// Get all stages
router.get('/', getAllStages);
router.get('/Stage', getAllStages);// Create a new stage
router.get('/Postuler/:id', getAllStages);// Create a new stage
router.get('/stage/:id',getStage)

router.post('/', createStage);

// Update a stage
router.put('/:id', updateStage);

// Delete a stage
router.delete('/:id', deleteStage);

module.exports = router;
