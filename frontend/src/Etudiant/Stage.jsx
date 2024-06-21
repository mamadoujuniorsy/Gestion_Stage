// Import des images
import consulter from './images/Consulter.png';
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
import calendar from './images/calendar.png';

// Import des composants React
import { Link } from 'react-router-dom';
import React from 'react';
import './css/App.css';
import './css/bootstrap.css';


class MainContent extends React.Component {
  render() {
    return (
        <div className="col-lg-12" style={{ marginLeft: '250px', padding: '20px' }}>
          {/* Contenu principal */}
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
              {/* Premier thumbnail */}
              <Link to="/Postuler" className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
                <img src={header} alt="Thumbnail 1" />
                <div className="title" style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', padding: '5px' }}>Génie Logiciel</div>
                <div className="category" style={{ position: 'absolute', top: '40px', left: '10px', color: 'white', padding: '5px' }}>Informatique</div>
                <div className="duree" style={{ position: 'absolute', top: '60px', left: '10px', color: 'white', padding: '5px' }}>2 mois</div>
                <div className="entreprises" style={{ position: 'absolute', top: '60px', right: '10px', color: 'white', padding: '5px' }}>SONATEL</div>
                <div className="description">
                  <p><img src={alarm} alt="" />Bac +2 Minimum</p>
                  <div className="image">
                    <div className="image1"><img src={danger} alt="" /> <br /> Date Limite : <br /> 23 Mars 2024</div>
                    <div className="image2"><img src={calendar} alt="" /> <br /> A Partir de : <br /> 20 Mai 2024</div>
                  </div>
                  <p>Stage Rémunéré</p>
                  <footer><a href=""><img src={details} alt="" /></a></footer>
                </div>
              </div>
              </Link>
              {/* Deuxième thumbnail */}
              <Link to="/Postuler" className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
                <img src={header} alt="Thumbnail 2" />
                <div className="title" style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', padding: '5px' }}>Génie Logiciel</div>
                <div className="category" style={{ position: 'absolute', top: '40px', left: '10px', color: 'white', padding: '5px' }}>Informatique</div>
                <div className="duree" style={{ position: 'absolute', top: '60px', left: '10px', color: 'white', padding: '5px' }}>2 mois</div>
                <div className="entreprises" style={{ position: 'absolute', top: '60px', right: '10px', color: 'white', padding: '5px' }}>SONATEL</div>
                <div className="description">
                  <p><img src={alarm} alt="" />Bac +2 Minimum</p>
                  <div className="image">
                    <div className="image1"><img src={danger} alt="" /> <br /> Date Limite : <br /> 23 Mars 2024</div>
                    <div className="image2"><img src={calendar} alt="" /> <br /> A Partir de : <br /> 20 Mai 2024</div>
                  </div>
                  <p>Stage Rémunéré</p>
                  <footer><a href=""><img src={details} alt="" /></a></footer>
                </div>
              </div>
              </Link>
              {/* Troisième thumbnail */}
              <Link to="/Postuler" className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-100 w-100 mr-8 thumbnail" style={{ position: 'relative' }}>
                <img src={header} alt="Thumbnail 3" />
                <div className="title" style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', padding: '5px' }}>Génie Logiciel</div>
                <div className="category" style={{ position: 'absolute', top: '40px', left: '10px', color: 'white', padding: '5px' }}>Informatique</div>
                <div className="duree" style={{ position: 'absolute', top: '60px', left: '10px', color: 'white', padding: '5px' }}>2 mois</div>
                <div className="entreprises" style={{ position: 'absolute', top: '60px', right: '10px', color: 'white', padding: '5px' }}>SONATEL</div>
                <div className="description">
                  <p><img src={alarm} alt="" />Bac +2 Minimum</p>
                  <div className="image">
                    <div className="image1"><img src={danger} alt="" /> <br /> Date Limite : <br /> 23 Mars 2024</div>
                    <div className="image2"><img src={calendar} alt="" /> <br /> A Partir de : <br /> 20 Mai 2024</div>
                  </div>
                  <p>Stage Rémunéré</p>
                  <footer><a href=""><img src={details} alt="" /></a></footer>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    // Ajoute la classe "active" au lien cliqué dans le sidebar
    document.querySelectorAll('.sidebar a').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Ajoute une animation sur hover pour chaque thumbnail
    document.querySelectorAll('.thumbnail').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transition = 'transform 0.3s ease';
        item.style.transform = 'scale(1.1)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transition = 'transform 0.3s ease';
        item.style.transform = 'scale(1)';
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <Sidebare />
          </div>
          {/* Contenu principal */}
          <div className="col-lg-10">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
