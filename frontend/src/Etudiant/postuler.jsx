// StageDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import backendAPI from '../api'; // Import de l'API backend
import moment from 'moment';

const StageDetails = () => {
  const { stageId } = useParams(); // Récupère l'ID du stage depuis l'URL
  const [stage, setStage] = useState(null);

  useEffect(() => {
    const fetchStage = async () => {
      try {
        const response = await backendAPI.getStageById(stageId); // Assurez-vous que cette méthode existe dans votre API
        setStage(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du stage :', error);
      }
    };

    fetchStage();
  }, [stageId]);

  if (!stage) {
    return <div>Chargement...</div>;
  }

  return (
    <div className='content'>
      <h2>Détails du Stage</h2>
      <p>Titre: {stage.title}</p>
      <p>Catégorie: {stage.category}</p>
      <p>Durée: {stage.duration}</p>
      <p>Entreprise: {stage.company}</p>
      <p>Niveau d'études: {stage.educationLevel}</p>
      <p>Date Limite: {moment(stage.deadline).format('D MMMM YYYY')}</p>
      <p>Date de début: {moment(stage.startDate).format('D MMMM YYYY')}</p>
      <p>Type: {stage.type}</p>
      {/* Ajoutez d'autres détails selon votre modèle de données */}
    </div>
  );
};

export default StageDetails;
