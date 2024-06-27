import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/DRH/SideBar';
import hero from '../../assets/hero.png';
import { IoCloudDownload } from "react-icons/io5";
import backendAPI from '../../api';

const Detail = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        const response = await backendAPI.getCandidateById(id);
        setCandidate(response.data);
      } catch (error) {
        console.error('Error fetching candidate details:', error);
      }
    };

    fetchCandidateDetails();
  }, [id]);
  const updateCandidateStatus = async (status) => {
    try {
      await backendAPI.updateCandidateStatus(candidate._id, status);
      setCandidate({ ...candidate, status }); // Mettre à jour le statut localement
    } catch (error) {
      console.error(`Error updating candidate status to ${status}:`, error);
    }
  };

  const handleAccept = () => updateCandidateStatus('Accepté');
  const handleReject = () => updateCandidateStatus('Rejeté');

  if (!candidate) {
    return <div>Loading...</div>;
  }

  const handleDownloadCv = async () => {
    try {
      const response = await backendAPI.downloadCv(candidate._id);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', candidate.cv.split('/').pop()); // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  const handleDownloadCoverLetter = async () => {
    try {
      const response = await backendAPI.downloadCoverLetter(candidate._id);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', candidate.coverLetter.split('/').pop()); // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading cover letter:', error);
    }
  };

  return (
    <div>
      <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
        <SideBar />
        <div className='h-4/5 flex-1 m-7 text-center'>
          <h1 className='text-2xl'>Détails dossier candidat</h1>
          <div className='flex justify-around mt-10'>
            <div className='w-2/5 h-5/6 bg-neutral-200'>
              <div className='flex justify-center items-center'>
                <img src={hero} alt='hero' className='mt-9 h-1/2' />
              </div>
              <div className='flex flex-col justify-between my-8'>
                <div className='flex flex-col justify-center my-8'>
                  <h2 className='font-bold'>Prénom</h2>
                  <h2>{candidate.firstName}</h2>
                </div>
                <div className='flex flex-col my-3'>
                  <h2 className='font-bold'>Nom</h2>
                  <h2>{candidate.lastName}</h2>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between w-2/5'>
              <div>
                <h2 className='font-bold'>Email</h2>
                <h2>{candidate.email}</h2>
              </div>
              <div>
                <h2 className='font-bold'>Description poste</h2>
                <h2>{candidate.stage && candidate.stage.description}</h2>
              </div>
              <div className='flex justify-around items-center mt-8'>
                <button className="rounded-xl bg-gradient-to-br from-[#0ef70e] to-[#19e207] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg
                 hover:shadow-[#19e207]/50" onClick={handleAccept}>
                  Accepter
                </button>
                <button className="rounded-xl bg-gradient-to-br from-[#f70e12] to-[#e20707]
                 px-5 py-3 text-base font-medium text-white transition duration-200 
                 hover:shadow-lg hover:shadow-[#f70e12]/50" onClick={handleReject}>
                  Refuser
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-between w-1/5'>
              <div className='flex items-center'>
                <IoCloudDownload color='blue' fontSize={40} className='animate-bounce' />
                <button onClick={handleDownloadCv} className='hover:text-blue-500'>
                  Télécharger CV
                </button>
              </div>
              <div className='flex items-center mt-8'>
                <IoCloudDownload color='blue' fontSize={40} className='animate-bounce' />
                <button onClick={handleDownloadCoverLetter} className='hover:text-blue-500'>
                  Télécharger lettre de motivation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
