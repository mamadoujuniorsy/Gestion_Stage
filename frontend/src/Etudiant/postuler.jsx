import React from 'react';
import Sidebare from './Sidebar.jsx';
import Logiciel from './images/genie_logiciel_utm.png';
import './css/bootstrap.css';
import './css/Postuler.css';
import { Link } from 'react-router-dom';

class MainContent extends React.Component {
  render() {
    const { stageTitle, stageDescription, prerequisites, type, duration, submissionDate, startDate, endDate } = this.props;

    return (
      <div className='flex flex-row bg-white h-screen w-screen overflow-hidden h-100'>
            <Sidebare />
      <section className="bg-light col-lg-10 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img src={Logiciel}  alt="Stage Photo" />
                      <span className="section-title text-primary mb-3 mb-sm-4 entreprise">SONATEL</span>
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3 className="h2 text-white mb-0">Génie Logiciel</h3>
                        <span className="text-primary">Informatique</span>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Pré-requis:</span> Bac +2 minimum
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Type:</span> Stage Rénuméré
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Durée:</span> 2 mois
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Date de Soumission:</span> 22 mai 2024
                        </li>
                        <li className="display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Date de Début:</span> 1 juin 2024
                        </li>
                        <br />
                        <li className="display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">Date de Fin:</span> 1 juin 2024
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div>
                <span className="section-title text-primary mb-3 mb-sm-4">Description</span>
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div className="mb-4 mb-sm-5">
                    <span className="section-title text-primary mb-3 mb-sm-4">COMPETENCES</span>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">HTML</div>
                        <div className="col-6 text-end">80%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                      <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '80%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" role="progressbar"></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">PHP</div>
                        <div className="col-6 text-end">90%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                      <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '90%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">JAVA SCRIPT</div>
                        <div className="col-6 text-end">50%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                      <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '50%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6">CSS</div>
                        <div className="col-6 text-end">60%</div>
                      </div>
                    </div>
                    <div className="custom-progress progress progress-medium" style={{ height: '4px' }}>
                      <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '60%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                    </div>
                  </div>
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">Documents</span>
                    
                    <div>
                    <div class="row">
                      <div class="col-lg-6">
                    <strong><h2 class="font-italic">Lettre de Motivation :</h2></strong>

                    <div class="custom-file col-lg-11p">
    <input type="file" accept=".pdf" class="custom-file-input" id="customFile" />
    <label class="custom-file-label" for="customFile">Choisir un Fichier</label>
    </div>
    </div>
        {/* CV */}
        <div class="col-lg-6">
        <strong><h2 class="font-italic">Curriculum Vitae :</h2></strong>
        <div class="custom-file">
    <input type="file" accept=".pdf" class="custom-file-input" id="customFile" />
    <label class="custom-file-label" for="customFile">Choisir un Fichier</label>
    </div>
  </div>
  </div>

        <br />
        <div class="mt-5 ml-[350px]">
          <button type="button" className="rounded-xl bg-gradient-to-br from-[#0ef70e] to-[#19e207] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#19e207]/50 mr-[30px]" onClick={this.props.onApply}>Postuler</button>
          <Link to="/Stage" type="button" className="rounded-xl bg-gradient-to-br from-[#f70e12] to-[#e20707] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#f70e12]/50">Annuler</Link>

        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply() {
    this.setState({ showModal: true });
  }

  render() {
    // Exemple de données de stage
    const stageData = {
      stageTitle: "Génie Logiciel",
      stageDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisites: "Bac +2 minimum",
      type: "Stage Rénuméré",
      duration: "2 Mois",
      submissionDate: "22 mai 2024",
      startDate: "1 juin 2024",
      endDate: "1 août 2024"
    };

    return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          
          {/* Contenu principal */}
          <div className="col-lg-10">
            <MainContent {...stageData} onApply={this.handleApply} />
            {this.state.showModal && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          {/* Heroicon name: check */}
                          <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Confirmation</h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Êtes-vous sûr de vouloir postuler à ce stage ?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => this.setState({ showModal: false })}>
                        Oui
                      </button>
                      <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => this.setState({ showModal: false })}>
                        Non
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
