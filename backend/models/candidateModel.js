const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['En attente', 'Accepté', 'Rejeté'],
    default: 'En attente',
  },
  stage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stage',
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
