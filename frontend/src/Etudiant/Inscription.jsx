import React, { useState } from 'react';
import logo from './images/stageSUP.png';
import login from './images/banner_login.png';
import emailIcon from './images/Alternate email.svg';
import lockIcon from './images/Lock.svg';
import nameIcon from './images/wpf_name.svg';
import phoneIcon from './images/bi_phone.svg'; // Import de l'image phone
import personIcon from './images/person_circle_icon_159926.svg';
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Partie du formulaire */}
      <div className="flex-1 bg-white flex justify-center items-center lg:ml-[-100px]">
        <div className="max-w-md p-8">
          <div className="mb-3 lg:flex lg:items-center">
            <img src={logo} alt="Logo" />
            <h1 className="text-4xl font-bold mb-10 mt-2 lg:mt-0">Stage SUP</h1>
          </div>
          <h1 className="text-5xl font-bold mb-4">Inscription</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
                <img src={personIcon} className="absolute left-6 top-1/2 transform -translate-y-1/2" alt="Person Icon" />
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Prénom"/>
              </div>
              <div className="w-full md:w-1/2 px-3 relative">
                <img src={nameIcon} className="absolute left-6 top-1/2 transform -translate-y-1/2" alt="Name Icon" />
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Nom"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
                <img src={emailIcon} className="absolute left-6 top-1/2 transform -translate-y-1/2" alt="Email Icon" />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Email"/>
              </div>
              <div className="w-full md:w-1/2 px-3 relative">
                <img src={phoneIcon} className="absolute left-6 top-1/2 transform -translate-y-1/2" alt="Phone Icon" />
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Téléphone"/>
              </div>
            </div>
            <div className="mb-4 relative">
              <img src={lockIcon} className="absolute left-3 top-1/2 transform -translate-y-1/2" alt="Lock Icon" />
              <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Mot de Passe" />
              {showPassword ? <FiEyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} /> : <FiEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />}
            </div>
            <div className="mb-4 relative">
              <img src={lockIcon} className="absolute left-3 top-1/2 transform -translate-y-1/2" alt="Lock Icon" />
              <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Confirmer Mot de Passe" />
              {showConfirmPassword ? <FiEyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleConfirmPasswordVisibility} /> : <FiEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleConfirmPasswordVisibility} />}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">S'inscrire</button>
          </form>
        </div>
      </div>
      {/* Partie de couleur grise */}
      <div className="flex-1 bg-gray-200 lg:flex justify-center items-center">
        <img src={login} alt="Banner" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default RegistrationPage;