const Candidate = require('../models/candidateModel');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/')); // Utilisation de path.join pour construire le chemin
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});


const upload = multer({ storage: storage });

// Get all candidates
const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().populate('stage');
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new candidate
const createCandidate = async (req, res) => {
  const { firstName, lastName, email, stage } = req.body;

  try {
    const newCandidate = new Candidate({
      firstName,
      lastName,
      email,
      stage,
      status: 'En attente',
      registrationDate: new Date(),
      cv: req.files['cv'][0].path,
      coverLetter: req.files['coverLetter'][0].path
    });

    const savedCandidate = await newCandidate.save();
    res.status(201).json(savedCandidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a candidate
const updateCandidate = async (req, res) => {
  const { firstName, lastName, email, stage, status } = req.body;

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, stage, status },
      { new: true }
    );
    if (!updatedCandidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json(updatedCandidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update candidate status
const updateCandidateStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { status },
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
// Get a candidate by ID
const getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id).populate('stage');
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json(candidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Fonction pour télécharger le CV d'un candidat
const downloadCv = async (req, res, next) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findById(id);
    if (!candidate || !candidate.cv) {
      return res.status(404).json({ message: 'CV not found' });
    }
    const filePath = path.join(__dirname, '../uploads', path.basename(candidate.cv));
    res.download(filePath);
  } catch (error) {
    next(error); // Passer l'erreur au middleware suivant (gestionnaire d'erreurs)
  }
};

// Fonction pour télécharger la lettre de motivation d'un candidat
const downloadCoverLetter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findById(id);
    if (!candidate || !candidate.coverLetter) {
      return res.status(404).json({ message: 'Cover letter not found' });
    }
    const filePath = path.join(__dirname, '../uploads', path.basename(candidate.coverLetter));
    res.download(filePath);
  } catch (error) {
    next(error); // Passer l'erreur au middleware suivant (gestionnaire d'erreurs)
  }
};

module.exports = {
  getAllCandidates,
  createCandidate,
  updateCandidate,
  updateCandidateStatus,
  deleteCandidate,
  getCandidateById,
  downloadCv,
  downloadCoverLetter,
  upload
};
