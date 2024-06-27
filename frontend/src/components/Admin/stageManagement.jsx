import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import backendAPI from '../../api'; 

const StageManagement = () => {
  const [stages, setStages] = useState([]);
  const [editingStage, setEditingStage] = useState(null);
  const [newStage, setNewStage] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    fetchStages();
  }, []);

  const fetchStages = async () => {
    try {
      const response = await backendAPI.getStages();
      setStages(response.data);
    } catch (error) {
      console.error('Error fetching stages:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStage({ ...newStage, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewStage({ ...newStage, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStage) {
        await backendAPI.updateStage(editingStage._id, newStage);
      } else {
        const response = await backendAPI.createStage(newStage);
        console.log('Stage created:', response.data);
      }
      setNewStage({ title: '', description: '', image: '' });
      setEditingStage(null);
      fetchStages();
    } catch (error) {
      console.error('Error saving stage:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = (stage) => {
    setNewStage(stage);
    setEditingStage(stage);
  };

  const handleDelete = async (stageId) => {
    try {
      await backendAPI.deleteStage(stageId);
      fetchStages();
    } catch (error) {
      console.error('Error deleting stage:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar className="w-1/4 h-full" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-4 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="title"
                value={newStage.title}
                onChange={handleInputChange}
                placeholder="Titre"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="description"
                value={newStage.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="p-2 border rounded w-full"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                {editingStage ? 'Modifier stage' : 'Ajouter stage'}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Liste des stages</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50">Titre</th>
                <th className="px-6 py-3 bg-gray-50">Description</th>
                <th className="px-6 py-3 bg-gray-50">Image</th>
                <th className="px-6 py-3 bg-gray-50">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stages.map(stage => (
                <tr key={stage._id}>
                  <td className="px-6 py-4">{stage.title}</td>
                  <td className="px-6 py-4">{stage.description}</td>
                  <td className="px-6 py-4">
                    {stage.image && <img src={stage.image} alt={stage.title} className="h-16 w-16 object-cover" />}
                  </td>
                  <td className="px-6 py-4 space-x-4">
                    <button
                      onClick={() => handleEdit(stage)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(stage._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StageManagement;
