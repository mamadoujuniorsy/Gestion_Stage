import consulter from './images/Consulter.png' 
import logo from './images/stageSUP.png' 
import stage from './images/Poster_stage.png' 
import profil from './images/Profil.png' 
import Deconnection from './images/Deconnection.png' 
import details from './images/Details.png'
import header from './images/Header.png'
import alarm from './images/Alarm.png'
import caution from './images/icon-park_caution.svg'
import calendrier from './images/icon-park_calendar.svg'

import {Link} from 'react-router-dom'
import React from 'react';
import './css/App.css'
import './css/bootstrap.css'
class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" style={{  }}>
        <img src={logo} alt="" />
        <br />
        <Link to="/Stage" className="active cursor-pointer"><img src={stage} alt="" /></Link>
        <Link to="/Consulter"><img src={consulter} alt="" /></Link>
        <Link to="/details"><img src={profil} alt="" /></Link>
        <a href="#" className="logout"><img src={Deconnection} alt="" /></a>
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
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
