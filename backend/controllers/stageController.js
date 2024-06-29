const Stage = require('../models/stageModel');

// Get all stages
const getAllStages = async (req, res) => {
  try {
    const stages = await Stage.find();
    res.json(stages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new stage
const createStage = async (req, res) => {
  const { title, description,image } = req.body;

  try {
    const newStage = new Stage({
      title,
      description,
      image,
    });

    const savedStage = await newStage.save();
    res.status(201).json(savedStage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get a stage by ID
const getStage = async (req, res) => {
  try {
    const stage = await Stage.findById(req.params.id);
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    res.json(stage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update a stage
const updateStage = async (req, res) => {
  const { title, description, image} = req.body;

  try {
    const updatedStage = await Stage.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );
    if (!updatedStage) return res.status(404).json({ message: 'Stage not found' });
    res.json(updatedStage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a stage
const deleteStage = async (req, res) => {
  try {
    const deletedStage = await Stage.findByIdAndDelete(req.params.id);
    if (!deletedStage) return res.status(404).json({ message: 'Stage not found' });
    res.json({ message: 'Stage deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStages,
  createStage,
  updateStage,
  deleteStage,
  getStage
};
