const express = require('express');
const router = express.Router();
const {
  getAllCandidates,
  createCandidate,
  updateCandidate,
  updateCandidateStatus,
  deleteCandidate,
  getCandidateById,
  downloadCoverLetter,
  downloadCv,
  upload
} = require('../controllers/candidateController');

// Get all candidates
router.get('/', getAllCandidates);
router.get('/:id', getCandidateById);
// Create a new candidate
router.post('/', upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]), createCandidate);

// Update a candidate
router.put('/:id', updateCandidate);

// Update candidate status
router.put('/:id/status', updateCandidateStatus);

// Delete a candidate
router.delete('/:id', deleteCandidate);
//Route pour télécharger le CV d'un candidat
router.get('/download/cv/:id', downloadCv);

// Route pour télécharger la lettre de motivation d'un candidat
router.get('/download/cover-letter/:id', downloadCoverLetter);
module.exports = router;
