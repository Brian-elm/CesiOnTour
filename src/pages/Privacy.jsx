import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Privacy() {
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
                  Politique de Confidentialité
                </h1>
                <p className="lead mb-4 animate-fade-in-delay">
                  Protection de vos données personnelles - RGPD
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
              
              {/* Introduction */}
              <div className="mb-5">
                <div className="alert alert-primary">
                  <i className="fas fa-shield-alt me-2"></i>
                  <strong>Engagement :</strong> Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles avec le plus grand respect, conformément au Règlement Général sur la Protection des Données (RGPD).
                </div>
              </div>

              {/* Données collectées */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-database me-2"></i>Données Collectées
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Le site ne collecte aucune donnée personnelle directement. Les seules données éventuellement transmises le sont via :
                    </p>
                    <ul>
                      <li className="mb-3">
                        <strong>Le formulaire de contact :</strong> Les informations saisies (nom, email, message) sont uniquement utilisées pour répondre à votre demande et ne sont pas stockées dans une base de données.
                      </li>
                      <li className="mb-3">
                        <strong>Le service HelloAsso :</strong> Qui dispose de sa propre politique de confidentialité accessible sur 
                        <a href="https://www.helloasso.com/confidentialite" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          https://www.helloasso.com/confidentialite
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-cookie-bite me-2"></i>Cookies
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Le site n'utilise pas de cookies de suivi, de mesure d'audience ni de publicité.
                    </p>
                    <p>
                      Seuls des cookies techniques peuvent être utilisés par :
                    </p>
                    <ul>
                      <li>L'hébergeur (IONOS)</li>
                      <li>Des services tiers (comme HelloAsso ou les polices Google Fonts)</li>
                    </ul>
                    <div className="alert alert-info mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Ces cookies techniques sont nécessaires au bon fonctionnement du site et ne collectent aucune donnée personnelle.
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsable du traitement */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-user-shield me-2"></i>Responsable du Traitement
                </h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>Responsable du traitement des données :</strong> ASSOCIATION DES ÉLÈVES CESI ON TOUR DUBLIN
                      </li>
                      <li className="mb-3">
                        <strong>Adresse :</strong> 3 rue du Bois de la Champelle, 54500 Vandoeuvre-lès-Nancy
                      </li>
                      <li className="mb-3">
                        <strong>Email de contact : </strong> 
                        <a href="mailto:cesiontour2026@gmail.com" className="text-decoration-none">
                          cesiontour2026@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vos droits */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-balance-scale me-2"></i>Vos Droits
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <i className="fas fa-eye text-primary me-2"></i>
                            <strong>Droit d'accès</strong> - Connaître les données collectées
                          </li>
                          <li className="mb-2">
                            <i className="fas fa-edit text-primary me-2"></i>
                            <strong>Droit de rectification</strong> - Corriger les données inexactes
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <i className="fas fa-trash text-primary me-2"></i>
                            <strong>Droit de suppression</strong> - Supprimer vos données
                          </li>
                          <li className="mb-2">
                            <i className="fas fa-ban text-primary me-2"></i>
                            <strong>Droit d'opposition</strong> - S'opposer au traitement
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="alert alert-warning mt-3">
                      <i className="fas fa-envelope me-2"></i>
                      <strong>Pour exercer ces droits :</strong> Écrivez-nous à&nbsp;
                      <a href="mailto:cesiontour2026@gmail.com" className="text-decoration-none">
                        cesiontour2026@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services tiers */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-external-link-alt me-2"></i>Services Tiers
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Notre site peut contenir des liens vers des services tiers. Chaque service dispose de sa propre politique de confidentialité :
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="fas fa-heart text-danger me-2"></i>
                        <strong>HelloAsso :</strong> Gestion des dons&nbsp;
                        <a href="https://www.helloasso.com/confidentialite" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          (voir leur politique)
                        </a>
                      </li>
                      <li className="mb-3">
                        <i className="fab fa-instagram text-primary me-2"></i>
                        <strong>Instagram :</strong> Interactions soumises à leur politique de confidentialité
                      </li>
                      <li className="mb-3">
                        <i className="fab fa-linkedin text-primary me-2"></i>
                        <strong>LinkedIn :</strong> Interactions soumises à leur politique de confidentialité
                      </li>
                      <li className="mb-3">
                        <i className="fab fa-google text-primary me-2"></i>
                        <strong>Google Fonts :</strong> Polices web (voir&nbsp;
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          politique Google
                        </a>)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sécurité */}
              <div className="mb-5">
                <h2 className="mb-4 text-primary">
                  <i className="fas fa-lock me-2"></i>Sécurité
                </h2>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                    </p>
                    <ul>
                      <li>L'accès non autorisé</li>
                      <li>La divulgation accidentelle</li>
                      <li>La modification non autorisée</li>
                      <li>La destruction malveillante</li>
                    </ul>
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
                      Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
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
