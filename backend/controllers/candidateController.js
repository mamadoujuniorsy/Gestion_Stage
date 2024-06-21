const Candidate = require('../models/candidateModel');

// Get all candidates
const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new candidate
const createCandidate = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const newCandidate = new Candidate({
      firstName,
      lastName,
      email,
    });

    const savedCandidate = await newCandidate.save();
    res.status(201).json(savedCandidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a candidate
const updateCandidate = async (req, res) => {
  const { firstName, lastName, email, status } = req.body;

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, status },
      { new: true }
    );
    if (!updatedCandidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json(updatedCandidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a candidate
const deleteCandidate = async (req, res) => {
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!deletedCandidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json({ message: 'Candidate deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCandidates,
  createCandidate,
  updateCandidate,
  deleteCandidate,
};
