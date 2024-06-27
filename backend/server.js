const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const stageRoutes = require('./routes/stageRoutes');
const candidateRoutes = require('./routes/candidateRoutes')
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
))
app.use(express.json()); // parser les requêtes JSON

const PORT = process.env.PORT || 8080;

// Connexion à la base de données
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Connected to DB');
    console.log('Server is running on port ' + PORT);
  });
}).catch(err => {
  console.error('Failed to connect to DB', err);
});

// Utilisez les routes utilisateur
app.use('/api/users', userRoutes); 
// Utilisez les routes stages
app.use('/api/stages', stageRoutes); 
// Utilisez les routes candidat
app.use('/api/candidates', candidateRoutes);
