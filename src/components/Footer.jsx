export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5><i className="fas fa-graduation-cap me-2"></i>CESI to Dublin 2026</h5>
            <p>
              Un projet étudiant ambitieux pour découvrir l'écosystème tech irlandais
              lors du Dublin Tech Summit 2026.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li><a href="#project" className="text-decoration-none text-white">Notre Projet</a></li>
              <li><a href="#team" className="text-decoration-none text-white">Notre Équipe</a></li>
              <li><a href="#donate" className="text-decoration-none text-white">Faire un Don</a></li>
              <li><a href="#contact" className="text-decoration-none text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Suivez-Nous</h5>
            <div className="social-links">
              <a href="https://www.instagram.com/cesiontour2026/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/cesiontour-cesiontour-a78b4438b/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://www.tiktok.com/@cesiontour2026" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-tiktok fa-2x"></i></a>
              <a href="https://www.youtube.com/channel/UCDaI-EAA5Wk8QTdypPgsCjw" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-youtube fa-2x"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2025 CESI to Dublin 2026. Tous droits réservés.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="/mentions-legales" className="text-decoration-none me-3">Mentions Légales</a>
            <a href="/politique-confidentialite" className="text-decoration-none">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


