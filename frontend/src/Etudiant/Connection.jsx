import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons
import login from './images/banner_login.png';
import logo from './images/stageSUP.png';
import './css/Connection.css'
import lock from './images/Lock.svg';
import eye from './images/eye.svg';
import emailIcon from './images/Alternate email.svg';
import backendAPI from '../api/index.js'; // Assurez-vous d'importer votre instance Axios configurée

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await backendAPI.login({ email, password });
            // Stocker le token dans le local storage
            localStorage.setItem('token', response.data.token);
            // Stocker les détails de l'utilisateur dans le local storage
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Rediriger l'utilisateur vers la page d'accueil ou une autre page après la connexion
            const userRole = response.data.user.role;
            if (userRole === 'admin') {
                navigate('/admin'); // Redirige vers la page admin si l'utilisateur est un admin
            } else if (userRole === 'drh') {
                navigate('/drh'); // Redirige vers la page DRH si l'utilisateur est un DRH
            } else if (userRole === 'stagiaire') {
                navigate('/'); // Redirige vers la page stagiaire si l'utilisateur est un stagiaire
            } else {
                navigate('/'); // Redirige vers la page d'accueil pour les autres rôles
            }
        } catch (error) {
            setError('Email ou mot de passe incorrect');
            console.error('Erreur lors de la connexion', error);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen relative">
            {/* Bouton Home */}
            <Link to="/" className="home-button absolute top-4 left-4">
                <FaHome size={24} />
            </Link>

            {/* Partie du formulaire */}
            <div className="flex-1 bg-white flex justify-center items-center lg:ml-[-100px]">
                <div className="max-w-md p-8">
                    <div className="mb-3 lg:flex lg:items-center">
                        <img src={logo} alt="Logo" />
                        <h1 className="text-4xl font-bold mb-10 mt-2 lg:mt-0">Stage SUP</h1>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Bienvenue(e)</h1>
                    <h2 className="text-2xl font-semibold mb-4">Connectez-vous</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 relative">
                            <img src={emailIcon} alt="Email" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <img src={lock} alt="Lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 mr-3" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder="Mot de Passe"
                            />
                            <img src={eye} alt="Toggle Password Visibility" className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility} />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md">Se Connecter</button>
                    </form>
                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    {/* Inscription */}
                    <div className="mt-4 text-center">
                        <p className="text-lg">Vous n'avez pas de compte ?</p>
                        <Link to="/inscription" className="signup-button inline-block mt-2">
                            Inscription
                        </Link>
                    </div>
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
