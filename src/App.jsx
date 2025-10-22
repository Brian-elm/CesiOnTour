import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import TeamCard from './components/TeamCard.jsx'
import PartnerLogo from './components/PartnerLogo.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import Donate from './pages/Donate.jsx'
import Legal from './pages/Legal.jsx'
import Privacy from './pages/Privacy.jsx'
import { useEffect } from 'react'

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-3 fw-bold mb-4 animate-fade-in">CESI to Dublin 2026</h1>
              <p className="lead mb-4 animate-fade-in-delay">
                Rejoignez-nous dans notre aventure vers le Dublin Tech Summit 2026 !
                Un projet étudiant ambitieux pour découvrir l'écosystème tech irlandais.
              </p>
              <div className="d-flex justify-content-center gap-3 animate-fade-in-delay-2">
                <a href="/donate" className="btn btn-warning btn-lg px-4">
                  <i className="fas fa-heart me-2"></i>Faire un Don
                </a>
                <a href="#project" className="btn btn-outline-light btn-lg px-4">
                  <i className="fas fa-info-circle me-2"></i>En Savoir Plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="py-5 bg-light fade-in-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Objectif de Financement</h2>
              <ProgressBar />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section id="project" className="py-5 fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-4">Notre Projet</h2>
              <p className="lead">
                Le Dublin Tech Summit 2026 représente une opportunité unique pour notre équipe d'étudiants CESI
                de découvrir l'écosystème technologique irlandais et d'élargir nos horizons professionnels.
              </p>
              <p>Ce voyage d'étude nous permettra de :</p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Assister aux conférences tech les plus innovantes</li>
                <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Rencontrer des professionnels du secteur</li>
                <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Découvrir les dernières tendances technologiques</li>
                <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Étendre notre réseau professionnel international</li>
              </ul>
              <a href="#project" className="btn btn-primary mt-3">
                <i className="fas fa-arrow-right me-2"></i>Découvrir le Projet Complet
              </a>
            </div>
            <div className="col-lg-6">
              <div className="project-image">
                <img src="/images/cesi-on-tour-blue.png" alt="Dublin Tech Summit" className="img-fluid rounded shadow" style={{maxHeight: '400px', width: 'auto', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 bg-light fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2>Notre Équipe</h2>
              <p className="lead">Découvrez les étudiants passionnés qui portent ce projet</p>
            </div>
          </div>
          <div className="row">
            {[
              { name: 'Hilel', role: 'Chef de Projet', img: '/images/Hilel.png', desc: 'Responsable de la coordination générale et de la logistique du voyage.' },
              { name: 'Cédric', role: 'Responsable Communication', img: '/images/Cedric.png', desc: 'Gestion des réseaux sociaux et de la communication externe.' },
              { name: 'Shein', role: 'Responsable Partenariats', img: '/images/Shein.png', desc: 'Développement des relations avec les entreprises partenaires.' },
              { name: 'Dimitriq', role: 'Responsable Finances', img: '/images/Dimitrique.png', desc: 'Gestion du budget et de la collecte de fonds.' },
            ].map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#team" className="btn btn-outline-primary">
              <i className="fas fa-users me-2"></i>Voir Toute l'Équipe
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-5 fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2>Nos Partenaires</h2>
              <p className="lead">Merci à nos partenaires qui nous soutiennent dans cette aventure</p>
            </div>
          </div>
          <div className="row align-items-center">
            {[
              { logo: '/images/Logo_cesi_2022.png', title: "CESI École d'Ingénieurs" },
              { logo: '/images/association.png', title: 'Association Étudiante' },
              { logo: '/images/entreprise.png', title: 'Entreprises Locales' },
              { logo: '/images/donateur.png', title: 'Donateurs Privés' },
            ].map((p) => (
              <PartnerLogo key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#partners" className="btn btn-outline-primary">
              <i className="fas fa-handshake me-2"></i>Découvrir Nos Partenaires
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-5 bg-light fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2>Actualités</h2>
              <p className="lead">Suivez l'avancement de notre projet</p>
            </div>
          </div>
          <div className="row">
            {[
              { title: "Première Réunion d'Équipe", date: '15 Janvier 2024', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', text: "Notre équipe s'est réunie pour planifier les prochaines étapes du projet Dublin 2026." },
              { title: 'Lancement de la Collecte', date: '20 Janvier 2024', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', text: 'Nous avons officiellement lancé notre campagne de financement participatif.' },
              { title: 'Nouveau Partenaire', date: '25 Janvier 2024', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', text: 'Une entreprise locale rejoint notre projet et nous apporte son soutien.' },
            ].map((n) => (
              <div className="col-lg-4 mb-4" key={n.title}>
                <div className="card news-card h-100 slide-in-left">
                  <img src={n.img} className="card-img-top" alt={n.title} />
                  <div className="card-body">
                    <h5 className="card-title">{n.title}</h5>
                    <p className="card-text">{n.text}</p>
                    <small className="text-muted">{n.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-5 bg-primary text-white fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Soutenez Notre Projet</h2>
              <p className="lead mb-4">
                Chaque don, même le plus petit, nous rapproche de notre objectif.
                Aidez-nous à vivre cette expérience unique !
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/donate" className="btn btn-warning btn-lg px-4">
                  <i className="fas fa-heart me-2"></i>Faire un Don
                </a>
                <a href="/donate" className="btn btn-light btn-lg px-4">
                  <i className="fas fa-info-circle me-2"></i>Voir les Détails
                </a>
              </div>
              <p className="mt-4 small">
                <i className="fas fa-shield-alt me-2"></i>
                Paiements sécurisés - Reçu fiscal disponible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 fade-in-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2>Contactez-Nous</h2>
                <p className="lead">Une question ? Une suggestion ? N'hésitez pas à nous écrire !</p>
              </div>
              <form id="contactForm" className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">Prénom</label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={5} required></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    <i className="fas fa-paper-plane me-2"></i>Envoyer le Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.CESIAnimations && typeof window.CESIAnimations.refresh === 'function') {
      window.CESIAnimations.refresh();
    }
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="/politique-confidentialite" element={<Privacy />} />
    </Routes>
  )
}

export default App
