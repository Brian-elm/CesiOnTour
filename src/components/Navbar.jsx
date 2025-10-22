export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          {/* <i className="fas fa-graduation-cap me-2"></i>CESI to Dublin 2026 */}
          <img src="/images/logo.png" alt="CESI to Dublin 2026" className="img-fluid" style={{maxHeight: '50px', width: 'auto', objectFit: 'contain'}} />
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="/#project">Notre Projet</a></li>
            <li className="nav-item"><a className="nav-link" href="/#team">Notre Équipe</a></li>
            <li className="nav-item"><a className="nav-link" href="/#partners">Partenaires</a></li>
            <li className="nav-item"><a className="nav-link" href="/#donate">Faire un Don</a></li>
            <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


