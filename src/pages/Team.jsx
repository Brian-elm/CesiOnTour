import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Données complètes de l'équipe
  const teamMembers = [
    { 
      name: 'Shein', 
      role: 'Chef de Projet', 
      img: '/images/Shein.png', 
      desc: 'Développement des relations avec les entreprises partenaires.',
      skills: ['Business Development', 'Négociation', 'Réseautage'],
      email: 'shein@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/shein',
      responsibilities: [
        'Recherche de partenaires',
        'Négociation des accords',
        'Suivi des relations partenaires',
        'Développement du réseau'
      ]
    },
    { 
      name: 'Benjamin', 
      role: 'Responsable Communication', 
      img: '/images/Benjamin.png', 
      desc: 'Gestion du budget et de la collecte de fonds.',
      skills: ['Gestion financière', 'Collecte de fonds', 'Analyse budgétaire'],
      email: 'dimitriq@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/dimitriq',
      responsibilities: [
        'Gestion du budget global',
        'Suivi des dépenses',
        'Coordination de la collecte de fonds',
        'Rapports financiers'
      ]
    }
  ];

  // Données de la promotion (étudiants supplémentaires)
  const promotionMembers = [
    {
      name: 'Brian',
      role: 'Développeur Web',
      img: '/images/placeholder-avatar.svg',
      desc: 'Développement et maintenance du site web du projet.',
      skills: ['React', 'JavaScript', 'CSS', 'Node.js'],
      email: 'brian@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/brian',
      responsibilities: [
        'Développement du site web',
        'Maintenance technique',
        'Optimisation des performances',
        'Intégration des fonctionnalités'
      ]
    },
    {
      name: 'Dimitri',
      role: 'Designer Graphique',
      img: '/images/placeholder-avatar.svg',
      desc: 'Création des visuels et de l\'identité graphique du projet.',
      skills: ['Photoshop', 'Illustrator', 'UI/UX Design', 'Branding'],
      email: 'dimitri@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/dimitri',
      responsibilities: [
        'Création de l\'identité visuelle',
        'Design des supports de communication',
        'Conception des interfaces utilisateur',
        'Maintenance de la charte graphique'
      ]
    },
    {
      name: 'Paul',
      role: 'Responsable Logistique',
      img: '/images/placeholder-avatar.svg',
      desc: 'Organisation des aspects pratiques du voyage et de l\'événement.',
      skills: ['Planification', 'Gestion d\'événements', 'Logistique', 'Coordination'],
      email: 'paul@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/paul',
      responsibilities: [
        'Planification du voyage',
        'Réservation des hébergements',
        'Coordination des transports',
        'Gestion des aspects pratiques'
      ]
    },
    {
      name: 'Evan',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion des relations avec les médias et les institutions.',
      skills: ['Relations publiques', 'Communication', 'Médias', 'Événementiel'],
      email: 'evan@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/evan',
      responsibilities: [
        'Relations avec les médias',
        'Communication institutionnelle',
        'Gestion de l\'image publique',
        'Coordination des événements'
      ]
    },
    {
      name: 'Lucas',
      role: 'Responsable Technique',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion des aspects techniques et informatiques du projet.',
      skills: ['IT Support', 'Systèmes', 'Technologie', 'Maintenance'],
      email: 'lucas@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/lucas',
      responsibilities: [
        'Support technique',
        'Gestion des systèmes informatiques',
        'Maintenance des équipements',
        'Formation technique de l\'équipe'
      ]
    },
    {
      name: 'Hilel',
      role: 'Responsable Documentation',
      img: '/images/placeholder-avatar.svg',
      desc: 'Création et gestion de la documentation du projet.',
      skills: ['Rédaction', 'Documentation', 'Organisation', 'Archivage'],
      email: 'hilel@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/hilel',
      responsibilities: [
        'Création de la documentation',
        'Archivage des documents',
        'Organisation des informations',
        'Mise à jour des contenus'
      ]
    },
    {
      name: 'Cédric',
      role: 'Responsable Partenariats',
      img: '/images/placeholder-avatar.svg',
      desc: 'Développement des relations avec les entreprises partenaires.',
      skills: ['Business Development', 'Négociation', 'Réseautage'],
      email: 'cedric@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/cedric',
      responsibilities: [
        'Recherche de nouveaux partenaires',
        'Négociation des accords',
        'Suivi des relations partenaires',
        'Développement du réseau'
      ]
    },
    {
      name: 'Baptiste',
      role: 'Responsable Logistique',
      img: '/images/placeholder-avatar.svg',
      desc: 'Organisation des aspects logistiques du projet.',
      skills: ['Planification', 'Organisation', 'Coordination', 'Gestion'],
      email: 'baptiste@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/baptiste',
      responsibilities: [
        'Planification logistique',
        'Coordination des équipes',
        'Gestion des ressources',
        'Suivi des délais'
      ]
    },
    {
      name: 'Guillaume',
      role: 'Responsable Technique',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion des aspects techniques avancés du projet.',
      skills: ['Technologie', 'Innovation', 'Développement', 'Recherche'],
      email: 'guillaume@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/guillaume',
      responsibilities: [
        'Recherche technologique',
        'Innovation technique',
        'Développement de solutions',
        'Veille technologique'
      ]
    },
    {
      name: 'Mathis',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion des relations publiques et de la communication.',
      skills: ['Communication', 'Relations publiques', 'Médias', 'Événementiel'],
      email: 'mathis@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/mathis',
      responsibilities: [
        'Communication externe',
        'Gestion des médias',
        'Organisation d\'événements',
        'Relations avec les institutions'
      ]
    },
    {
      name: 'Enes',
      role: 'Responsable Finances',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion financière et budgétaire du projet.',
      skills: ['Gestion financière', 'Comptabilité', 'Budget', 'Analyse'],
      email: 'enes@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/enes',
      responsibilities: [
        'Gestion du budget',
        'Suivi des dépenses',
        'Analyse financière',
        'Rapports comptables'
      ]
    },
    {
      name: 'Emmanuelle',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Coordination des relations publiques et communication.',
      skills: ['Communication', 'Coordination', 'Relations publiques', 'Organisation'],
      email: 'emmanuelle@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/emmanuelle',
      responsibilities: [
        'Coordination des communications',
        'Gestion des relations publiques',
        'Organisation des événements',
        'Suivi des campagnes'
      ]
    },
    {
      name: 'Joris',
      role: 'Responsable Documentation',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion et organisation de la documentation du projet.',
      skills: ['Documentation', 'Organisation', 'Archivage', 'Rédaction'],
      email: 'joris@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/joris',
      responsibilities: [
        'Organisation de la documentation',
        'Archivage des documents',
        'Rédaction de contenus',
        'Mise à jour des informations'
      ]
    },
    {
      name: 'Loris',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Développement des relations publiques et communication.',
      skills: ['Relations publiques', 'Communication', 'Médias', 'Événementiel'],
      email: 'loris@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/loris',
      responsibilities: [
        'Développement des relations publiques',
        'Communication média',
        'Organisation d\'événements',
        'Gestion de l\'image'
      ]
    },
    {
      name: 'Maxime',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Coordination des relations publiques et communication externe.',
      skills: ['Coordination', 'Relations publiques', 'Communication', 'Gestion'],
      email: 'maxime@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/maxime',
      responsibilities: [
        'Coordination des relations publiques',
        'Communication externe',
        'Gestion des partenariats média',
        'Organisation des événements'
      ]
    },
    {
      name: 'Maxence',
      role: 'Responsable Relations Publiques',
      img: '/images/placeholder-avatar.svg',
      desc: 'Gestion des relations publiques et communication institutionnelle.',
      skills: ['Relations publiques', 'Communication institutionnelle', 'Médias', 'Événementiel'],
      email: 'maxence@cesiontour2026.com',
      linkedin: 'https://linkedin.com/in/maxence',
      responsibilities: [
        'Gestion des relations publiques',
        'Communication institutionnelle',
        'Relations avec les médias',
        'Coordination des événements'
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.CESIAnimations && typeof window.CESIAnimations.refresh === 'function') {
      window.CESIAnimations.refresh();
    }
  }, []);

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
                  Notre Équipe
                </h1>
                <p className="lead mb-4 animate-fade-in-delay">
                  Découvrez toute la promotion CESI qui participe à cette aventure exceptionnelle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Principale */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4">Équipe de Direction</h2>
              <p className="lead">Les quatre étudiants qui dirigent et coordonnent le projet</p>
            </div>
          </div>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="col-lg-3 col-md-6 mb-4">
                <div className="card team-card h-100" onClick={() => setSelectedMember(member)}>
                  <div className="team-photo">
                    <img src={member.img} alt={member.name} className="card-img-top" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="text-primary mb-3">{member.role}</h6>
                    <p className="card-text small">{member.desc}</p>
                    <div className="team-skills">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="badge bg-light text-dark me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toute la Promotion */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4">Toute la Promotion</h2>
              <p className="lead">L'ensemble des étudiants impliqués dans le projet CESI On Tour 2026</p>
            </div>
          </div>
          <div className="row justify-content-center">
            {promotionMembers.map((member, index) => (
              <div key={member.name} className="col-lg-4 col-md-6 mb-4">
                <div className="card team-card h-100" onClick={() => setSelectedMember(member)}>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="rounded-circle" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    </div>
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="text-primary mb-3">{member.role}</h6>
                    <p className="card-text small">{member.desc}</p>
                    <div className="team-skills">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="badge bg-light text-dark me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques de l'équipe */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4">Notre Équipe en Chiffres</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-users fa-3x text-primary mb-3"></i>
                  <h3 className="counter">{teamMembers.length + promotionMembers.length}</h3>
                  <p className="text-muted">Étudiants Impliqués</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-graduation-cap fa-3x text-success mb-3"></i>
                  <h3 className="counter">{teamMembers.length}</h3>
                  <p className="text-muted">Équipe de Direction</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-tasks fa-3x text-warning mb-3"></i>
                  <h3 className="counter">{promotionMembers.length}</h3>
                  <p className="text-muted">Compétences Diverses</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-heart fa-3x text-danger mb-3"></i>
                  <h3 className="counter">{promotionMembers.length / teamMembers.length * 100}%</h3>
                  <p className="text-muted">Motivation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour les détails d'un membre */}
      {selectedMember && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMember.name} - {selectedMember.role}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedMember(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img 
                      src={selectedMember.img} 
                      alt={selectedMember.name} 
                      className="img-fluid rounded mb-3"
                      style={{ maxHeight: '200px' }}
                    />
                    <div className="social-links">
                      <a href={`mailto:${selectedMember.email}`} className="btn btn-outline-primary btn-sm me-2">
                        <i className="fas fa-envelope me-1"></i>Email
                      </a>
                      {selectedMember.linkedin && (
                        <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                          <i className="fab fa-linkedin me-1"></i>LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h6>Description</h6>
                    <p className="mb-3">{selectedMember.desc}</p>
                    
                    <h6>Compétences</h6>
                    <div className="mb-3">
                      {selectedMember.skills.map((skill, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {selectedMember.responsibilities && selectedMember.responsibilities.length > 0 && (
                      <>
                        <h6>Responsabilités</h6>
                        <ul className="list-unstyled">
                          {selectedMember.responsibilities.map((responsibility, index) => (
                            <li key={index} className="mb-1">
                              <i className="fas fa-check text-success me-2"></i>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay pour le modal */}
      {selectedMember && (
        <div className="modal-backdrop fade show" onClick={() => setSelectedMember(null)}></div>
      )}

      <Footer />
    </>
  );
}
