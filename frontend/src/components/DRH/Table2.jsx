import React, { useEffect, useState } from 'react';
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import backendAPI from '../../api';  // Assurez-vous que vous avez importé votre API

const Table2 = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchAcceptedCandidates = async () => {
      try {
        const response = await backendAPI.getCandidates();
        const acceptedCandidates = response.data.filter(candidate => candidate.status === 'accepted');
        setCandidates(acceptedCandidates);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchAcceptedCandidates();
  }, []);

  const handleDelete = (candidateId) => async () => {
    try {
      await backendAPI.deleteCandidate(candidateId);
      setCandidates(candidates.filter(candidate => candidate._id !== candidateId));
    } catch (error) {
      console.error('Error deleting candidate:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <div className="inline-block w-full max-w-[1000px] py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-200 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr> 
                  <th scope="col" className="px-6 py-4">Stagiaire</th>
                  <th scope="col" className="px-6 py-4">Stage</th>
                  <th scope="col" className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map(candidate => (
                  <tr key={candidate._id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">{candidate.firstName} {candidate.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{candidate.stage ? candidate.stage.title : 'N/A'}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link to={`/update/${candidate._id}`}>
                        <HiPencil color='blue' fontSize={25} className='cursor-pointer'/>
                      </Link>
                      <MdDelete color='red' fontSize={25} className='cursor-pointer' onClick={handleDelete(candidate._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {candidates.length === 0 && (
              <div className="text-center py-4">Aucun candidat accepté n'a été trouvé.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table2;
