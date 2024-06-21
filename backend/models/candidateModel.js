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
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
