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
        const response = await backendAPI.getStage(stageId); // Assurez-vous que cette méthode existe dans votre API
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
      <p>Catégorie: Inf</p>
      <p>Durée: 2 mois</p>
      <p>Entreprise: Sonatel</p>
      <p>Niveau d'études: Bac + 2 minimun</p>
      <p>Disponibilité: {moment(stage.datePosted).format('D MMMM YYYY')}</p>
      
      {/* Ajoutez d'autres détails selon votre modèle de données */}
    </div>
  );
};

export default StageDetails;
