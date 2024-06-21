import React, { useState } from 'react';
import login from './images/banner_login.png';
import logo from './images/stageSUP.png';
import lock from './images/Lock.svg';
import eye from './images/eye.svg';
import email from './images/Alternate email.svg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <h1 className="text-5xl font-bold mb-4">Bienvenue(e)</h1>
          <h2 className="text-2xl font-semibold mb-4">Connectez-vous</h2>
          <form>
            <div className="mb-4 relative">
              <img src={email} alt="Email" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input type="email" id="email" name="email" className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="E-mail"/>
            </div>
            <div className="mb-4 relative">
              <img src={lock} alt="Lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 mr-3" />
              <input type={showPassword ? "text" : "password"} id="password" name="password" className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Mot de Passe" />
              <img src={eye} alt="Toggle Password Visibility" className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">Se Connecter</button>
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

export default LoginPage;
