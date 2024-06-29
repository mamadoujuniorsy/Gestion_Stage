'./images/Consulter.png';
import logo from './images/logo.png';
import stage from './images/Poster_stage.png';
import profil from './images/Profil.png';
import Deconnection from './images/Deconnection.png';
import details from './images/Details.png';
import header from './images/Header.png';
import alarm from './images/Alarm.png';
import caution from './images/icon-park_caution.svg';
import calendrier from './images/icon-park_calendar.svg';
import Sidebare from './Sidebar.jsx';
import danger from './images/danger.png';
import calendar from './images/calendar.png';import React from 'react';
import './css/App.css';
import './css/bootstrap.css';
import { Link } from 'react-router-dom'; // Import de Link pour les routes
import backendAPI from '../api'; // Import de l'API backend
import moment from 'moment';

class App extends React.Component {
  state = {
    stages: [],
  };

  async componentDidMount() {
    try {
      const response = await backendAPI.getStages(); // Appel à l'API backend pour récupérer les stages
      this.setState({ stages: response.data }); // Mise à jour de l'état avec les stages récupérés
    } catch (error) {
      console.error('Erreur lors de la récupération des stages :', error);
      // Gestion de l'erreur appropriée, par exemple afficher un message d'erreur à l'utilisateur
    }
  }

  render() {
    return (
      <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
        <Sidebare />
        <div className="col-lg-10">
          {/* Contenu principal */}
          <div className="col-lg-12" style={{ marginLeft: '0px', padding: '20px' }}>
            <div className="row mb-3">
              <div className="col-lg-7">
                {/* Barre de recherche */}
                <input type="text" className="form-control" placeholder="Rechercher Stage ..." />
              </div>
              <div className="col-lg-3">
                {/* Sélecteur de catégories */}
                <select className="form-control">
                  <option value="">Toutes les catégories</option>
                  <option value="categorie1">Catégorie 1</option>
                  <option value="categorie2">Catégorie 2</option>
                  <option value="categorie3">Catégorie 3</option>
                </select>
              </div>
              <div className="col-lg-2">
                {/* Bouton de recherche */}
                <button type="button" className="btn btn-primary btn-block">Rechercher</button>
              </div>
              <div className="col-lg-2">
                <br />
                <button type="button" className="btn btn-secondary">Informatique</button>
              </div>
            </div>
            <div className="col-lg-13">
              <div className="d-flex">
                {/* Render stages dynamically */}
                {this.state.stages.map((stage) => (
                  <Link to="/Postuler" key={stage._id} className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
                <img src={header} style={{ width: 500 }} alt="Thumbnail 1" />
                <div className="title" style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', padding: '5px' }}>{stage.title}</div>
                <div className="category" style={{ position: 'absolute', top: '40px', left: '10px', color: 'white', padding: '5px' }}>Informatique</div>
                <div className="duree" style={{ position: 'absolute', top: '60px', left: '10px', color: 'white', padding: '5px' }}>2 mois</div>
                <div className="entreprises" style={{ position: 'absolute', top: '60px', right: '10px', color: 'white', padding: '5px' }}>SONATEL</div>
                <div className="description">
                  <p><img src={alarm} alt="" />Bac +2 Minimum</p>
                  <div className="image">
                    <div className="image1"><img src={danger} alt="" /> <br /> Date Limite : <br /> {moment(stage.deadline).format('D MMMM YYYY')}</div>
                    <div className="image2"><img src={calendar} alt="" /> <br /> A Partir de : <br /> 15 juillet 2024</div>
                  </div>
                  <p>Stage Rémunéré</p>
                  <footer><a href=""><img src={details} alt="" /></a></footer>
                </div>
              </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;