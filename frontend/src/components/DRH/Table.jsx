import React, { useEffect, useState } from 'react';
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import backendAPI from '../../api';

const Table = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await backendAPI.getCandidates();
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
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
                  <th scope="col" className="px-6 py-4">Prénom</th>
                  <th scope="col" className="px-6 py-4">Nom</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                  <th scope="col" className="px-6 py-4">Date dépôt</th>
                  <th scope="col" className="px-6 py-4">Statut</th>
                  <th scope="col" className="px-6 py-4"></th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {candidates.map(candidate => (
                  <tr key={candidate._id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">{candidate.firstName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{candidate.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{candidate.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{new Date(candidate.registrationDate).toLocaleDateString()}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <span className={`px-2 py-1 rounded-md ${candidate.status === 'Accepté' ? 'bg-green-500 text-white' : candidate.status === 'Rejeté' ? 'bg-red-500 text-white' : 'bg-neutral-200 text-black'}`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link to={`/details/${candidate._id}`}>
                        <HiPencil color='blue' fontSize={25} className='cursor-pointer'/>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <MdDelete color='red' fontSize={25} className='cursor-pointer' onClick={handleDelete(candidate._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
