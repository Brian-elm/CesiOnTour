import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Legal() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section-small opaque">
        <div className="hero-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-8 mx-auto text-center text-white">
                <h1 className="display-4 fw-bold mb-4 animate-fade-in">
                  Mentions Légales
                </h1>
                <p className="lead mb-4 animate-fade-in-delay">
                  Informations légales concernant le site Projet Dublin 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              {/* Informations générales */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-info-circle me-2"></i>Informations Générales
                </h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>Nom du site :</strong> Projet Dublin 2026
                      </li>
                      <li className="mb-3">
                        <strong>Nature du site :</strong> Site vitrine à but non lucratif présentant un projet étudiant du CESI Nancy
                      </li>
                      <li className="mb-3">
                        <strong>Éditeur du site :</strong> ASSOCIATION DES ÉLÈVES CESI ON TOUR DUBLIN
                      </li>
                      <li className="mb-3">
                        <strong>Adresse :</strong> 3 rue du Bois de la Champelle, 54500 Vandoeuvre-lès-Nancy
                      </li>
                      <li className="mb-3">
                        <strong>Email : </strong> 
                        <a href="mailto:cesiontour2026@gmail.com" className="text-decoration-none">
                          cesiontour2026@gmail.com
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>Responsable de la publication :</strong> Brian El Meskiri
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hébergement */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-server me-2"></i>Hébergement
                </h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>Hébergeur :</strong> IONOS
                      </li>
                      <li className="mb-3">
                        <strong>Adresse :</strong> 7 Place de la Gare, 57200 Sarreguemines, France
                      </li>
                      <li className="mb-3">
                        <strong>Site web : </strong> 
                        <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          https://www.ionos.fr
                        </a>
                      </li>
                      <li className="mb-3">
                        <strong>Téléphone :</strong> 09 70 80 89 11
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-copyright me-2"></i>Propriété Intellectuelle
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      L'ensemble du contenu présent sur le site (textes, images, logos, graphismes, etc.) est la propriété du projet "Projet Dublin 2026" sauf mention contraire.
                    </p>
                    <p>
                      Toute reproduction, distribution ou modification du contenu sans autorisation écrite préalable est interdite.
                    </p>
                    <p>
                      Les marques et logos mentionnés sur ce site sont la propriété de leurs détenteurs respectifs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation de responsabilité */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-exclamation-triangle me-2"></i>Limitation de Responsabilité
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Ce site est un projet étudiant réalisé dans le cadre du CESI Nancy. Il ne saurait être tenu responsable d'erreurs, d'omissions ou de tout dommage résultant de son utilisation.
                    </p>
                    <p>
                      Les liens externes (ex. HelloAsso, Dublin Tech Summit, réseaux sociaux) sont fournis à titre informatif et n'impliquent aucune responsabilité quant à leur contenu.
                    </p>
                    <p>
                      L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-envelope me-2"></i>Contact
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Pour toute question ou signalement concernant ce site :
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        <strong>Email : </strong> 
                        <a href="mailto:cesiontour2026@gmail.com" className="text-decoration-none">
                          cesiontour2026@gmail.com
                        </a>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-comment me-2 text-primary"></i>
                        <strong>Formulaire :</strong> Via le formulaire sur la page 
                        <a href="/#contact" className="text-decoration-none"> Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dernière mise à jour */}
              <div className="alert alert-info">
                <i className="fas fa-calendar me-2"></i>
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
