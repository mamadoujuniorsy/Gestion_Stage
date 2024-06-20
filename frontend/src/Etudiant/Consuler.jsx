import React, { useState } from 'react';
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Sidebare from './Sidebar.jsx';
import './css/App.css';
import person from './images/person_circle_icon_159926.svg';

const Table = () => {
  const [showStageInfoModal, setShowStageInfoModal] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [showStudentInfoModal, setShowStudentInfoModal] = useState(false); // Nouvel état pour le modal d'information sur l'étudiant

  const toggleStageInfoModal = (stage) => {
    setSelectedStage(stage);
    setShowStageInfoModal(!showStageInfoModal);
  };

  const toggleDeleteConfirmationModal = (index) => {
    setSelectedRowIndex(index);
    setShowDeleteConfirmationModal(!showDeleteConfirmationModal);
  };

  const toggleStudentInfoModal = () => {
    setShowStudentInfoModal(!showStudentInfoModal);
  };

  return (
    <div>
      <Sidebare />
      <div className="flex flex-col mt-[50px] ml-[300px]">
        <h1 className="text-2xl font-bold mb-10">Bienvenu(e), Mamadou</h1> {/* Ajout de l'événement onClick pour ouvrir le modal d'information sur l'étudiant */}
        <div className='mt-[-70px] ml-[800px]' onClick={toggleStudentInfoModal}>
          <img src={person} alt="" /> <h1 className='text-2xl font-bold mt-[-30px] ml-[40px]'>Mamadou Sy</h1>
          <small className='ml-[40px]'>Etudiant</small>
        </div>
        <div className="overflow-x-auto mt-[30px]">
          <div className="inline-block w-full max-w-[1000px] py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-200 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className="px-6 py-4">Stage</th>
                    <th scope="col" className="px-6 py-4">Date de Soumission</th>
                    <th scope="col" className="px-6 py-4">Entreprise</th>
                    <th scope="col" className="px-6 py-4">Status</th>
                    <th scope="col" className="px-6 py-4">Détails</th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((stage, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">{stage}</td>
                      <td className="whitespace-nowrap px-6 py-4" class="badge badge-danger mt-3">10 mai 2024</td>
                      <td className="whitespace-nowrap px-6 py-4">SONATEL</td>
                      <td className="whitespace-nowrap px-6 py-4" class="badge badge-success">Accepté</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <HiPencil color='blue' fontSize={25} onClick={() => toggleStageInfoModal(stage)} />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <MdDelete color='red' fontSize={25} onClick={() => toggleDeleteConfirmationModal(index)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showStageInfoModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Stage Information</h3>
                    <div className="mt-2">
                      {/* Stage information display */}
                      <p className="text-sm text-gray-500">Stage: {selectedStage}</p>
                      <p className="text-sm text-gray-500">Date de Soumission: 10 mai 2024</p>
                      <p className="text-sm text-gray-500">Entreprise: SONATEL</p>
                      <p className="text-sm text-gray-500">Status: Accepté</p>
                      {/* Add more stage information as needed */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => toggleStageInfoModal(null)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDeleteConfirmationModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <img src={logo} alt="" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Confirmation</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Are you sure you want to delete this item?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => toggleDeleteConfirmationModal(null)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Supprimer
                </button>
                <button onClick={() => toggleDeleteConfirmationModal(null)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Retour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showStudentInfoModal && ( // Affichage du modal d'information sur l'étudiant
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Modifier Information</h3>
                    <div className="mt-2">
                      {/* Student information display */}
                      <form className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Prénom</label>
                          <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Nom</label>
                          <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Mot de Passe</label>
                          <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={() => setShowStudentInfoModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Sauvegarder
                </button>
                <button onClick={() => setShowStudentInfoModal(false)} type="button"  class="badge badge-danger">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
