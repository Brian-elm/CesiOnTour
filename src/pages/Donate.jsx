import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');

  // Données du projet
  const projectData = {
    goal: 10000,
    collected: 7200,
    donors: 45,
    daysLeft: 23,
    startDate: '15 Janvier 2024',
    endDate: '15 Mars 2024'
  };

  const progressPercent = Math.round((projectData.collected / projectData.goal) * 100);
  const remaining = projectData.goal - projectData.collected;

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  // Budget détaillé
  const budgetBreakdown = [
    { category: 'Transport', items: [
      { name: 'Vols aller-retour (4 personnes)', amount: 4500, collected: 4050, description: 'Vols Paris-Dublin pour toute l\'équipe' },
      { name: 'Transports locaux', amount: 800, collected: 720, description: 'Bus, métro, taxis sur place' }
    ]},
    { category: 'Hébergement', items: [
      { name: 'Hôtel 3 nuits (4 chambres)', amount: 2400, collected: 2160, description: 'Hébergement confortable en centre-ville' },
      { name: 'Petit-déjeuner', amount: 300, collected: 270, description: 'Petit-déjeuner inclus à l\'hôtel' }
    ]},
    { category: 'Événement', items: [
      { name: 'Billets conférence', amount: 1200, collected: 1080, description: 'Accès au Dublin Tech Summit 2026' },
      { name: 'Matériel promotionnel', amount: 400, collected: 360, description: 'Flyers, goodies, bannières' }
    ]},
    { category: 'Repas & Divers', items: [
      { name: 'Repas (3 jours)', amount: 600, collected: 540, description: 'Déjeuners et dîners sur place' },
      { name: 'Assurance voyage', amount: 200, collected: 180, description: 'Assurance médicale et rapatriement' }
    ]}
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.CESIAnimations && typeof window.CESIAnimations.refresh === 'function') {
      window.CESIAnimations.refresh();
    }
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonation = (method) => {
    const amount = selectedAmount || customAmount;
    if (!amount || amount <= 0) {
      alert('Veuillez sélectionner un montant valide');
      return;
    }
    
    // Simulation de redirection vers la plateforme de paiement
    console.log(`Redirection vers ${method} pour ${amount}€`);
    // Ici vous pouvez ajouter la vraie logique de redirection
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section-small opaque">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4 animate-fade-in">
                Soutenez Notre Projet
              </h1>
              <p className="lead mb-4 animate-fade-in-delay">
                Chaque don nous rapproche de notre objectif. 
                Aidez-nous à vivre cette expérience unique à Dublin !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="mb-4">État d'Avancement</h2>
                <p className="lead">Nous avons déjà collecté <strong>{progressPercent}%</strong> de notre objectif !</p>
              </div>
              
              {/* Barre de progression */}
              <div className="progress-container">
                <div className="progress mb-3" style={{ height: '30px' }}>
                  <div 
                    className="progress-bar bg-success progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    style={{ width: `${progressPercent}%` }}
                    aria-valuenow={progressPercent} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    <span className="progress-text">{progressPercent}%</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 text-center">
                    <h4 className="text-success">{projectData.collected.toLocaleString('fr-FR')}€</h4>
                    <p className="text-muted">Récoltés</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h4 className="text-primary">{projectData.goal.toLocaleString('fr-FR')}€</h4>
                    <p className="text-muted">Objectif</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h4 className="text-warning">{remaining.toLocaleString('fr-FR')}€</h4>
                    <p className="text-muted">Restant</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h4 className="text-info">{projectData.donors}</h4>
                    <p className="text-muted">Donateurs</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><i className="fas fa-calendar-alt text-primary me-2"></i>Timeline</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><strong>Début :</strong> {projectData.startDate}</li>
                        <li className="mb-2"><strong>Fin :</strong> {projectData.endDate}</li>
                        <li className="mb-2"><strong>Jours restants :</strong> {projectData.daysLeft} jours</li>
                        <li><strong>Progression :</strong> {progressPercent}% atteint</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title"><i className="fas fa-chart-line text-success me-2"></i>Objectif</h5>
                      <p>Notre objectif est de récolter <strong>10 000€</strong> pour financer intégralement notre participation au Dublin Tech Summit 2026.</p>
                      <div className="progress mt-3" style={{ height: '20px' }}>
                        <div className="progress-bar bg-success" style={{ width: `${progressPercent}%` }}>
                          {progressPercent}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2>Répartition Détaillée du Budget</h2>
                <p className="lead">Transparence totale sur l'utilisation des fonds</p>
              </div>
              
              {budgetBreakdown.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-5">
                  <h4 className="mb-4 text-primary">
                    <i className="fas fa-folder me-2"></i>{category.category}
                  </h4>
                  <div className="row">
                    {category.items.map((item, itemIndex) => {
                      const itemProgress = Math.round((item.collected / item.amount) * 100);
                      return (
                        <div key={itemIndex} className="col-lg-6 mb-4">
                          <div className="card h-100">
                            <div className="card-body">
                              <h6 className="card-title">{item.name}</h6>
                              <p className="card-text small text-muted">{item.description}</p>
                              <div className="d-flex justify-content-between mb-2">
                                <span>Budget : <strong>{item.amount.toLocaleString('fr-FR')}€</strong></span>
                                <span>Récolté : <strong className="text-success">{item.collected.toLocaleString('fr-FR')}€</strong></span>
                              </div>
                              <div className="progress" style={{ height: '8px' }}>
                                <div 
                                  className="progress-bar bg-primary" 
                                  style={{ width: `${itemProgress}%` }}
                                ></div>
                              </div>
                              <small className="text-muted">{itemProgress}% financé</small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2>Faire un Don</h2>
                <p className="lead">Choisissez le montant de votre contribution</p>
              </div>

              <div className="card shadow-lg">
                <div className="card-body p-5">
                  {/* Montants prédéfinis */}
                  <div className="mb-4">
                    <h5 className="mb-3">Montants suggérés</h5>
                    <div className="row g-3">
                      {predefinedAmounts.map((amount) => (
                        <div className="col-md-4 col-sm-6" key={amount}>
                          <div 
                            className={`card amount-card h-100 ${selectedAmount === amount ? 'border-primary bg-primary text-white' : ''}`}
                            onClick={() => handleAmountSelect(amount)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="card-body text-center">
                              <h4 className="mb-0">{amount}€</h4>
                              {amount >= 100 && <small className="text-muted">Merci !</small>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Montant personnalisé */}
                  <div className="mb-4">
                    <h5 className="mb-3">Ou montant personnalisé</h5>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text">€</span>
                      <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Montant de votre choix"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Informations donateur */}
                  <div className="mb-4">
                    <h5 className="mb-3">Vos informations (optionnel)</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Votre nom"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="Votre email"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <textarea 
                          className="form-control" 
                          rows="3" 
                          placeholder="Un message d'encouragement (optionnel)"
                          value={donorMessage}
                          onChange={(e) => setDonorMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Méthodes de paiement */}
                  <div className="mb-4">
                    <h5 className="mb-3">Méthode de paiement</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="card donation-method h-100" onClick={() => handleDonation('HelloAsso')}>
                          <div className="card-body text-center">
                            <i className="fas fa-heart fa-3x text-danger mb-3"></i>
                            <h5>HelloAsso</h5>
                            <p className="text-muted small">Plateforme française sécurisée</p>
                            <ul className="list-unstyled small text-start">
                              <li><i className="fas fa-check text-success me-2"></i>Reçu fiscal automatique</li>
                              <li><i className="fas fa-check text-success me-2"></i>Paiement sécurisé</li>
                              <li><i className="fas fa-check text-success me-2"></i>Frais réduits</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card donation-method h-100" onClick={() => handleDonation('PayPal')}>
                          <div className="card-body text-center">
                            <i className="fab fa-paypal fa-3x text-primary mb-3"></i>
                            <h5>PayPal</h5>
                            <p className="text-muted small">Paiement international</p>
                            <ul className="list-unstyled small text-start">
                              <li><i className="fas fa-check text-success me-2"></i>Paiement rapide</li>
                              <li><i className="fas fa-check text-success me-2"></i>Protection acheteur</li>
                              <li><i className="fas fa-check text-success me-2"></i>Cartes acceptées</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact du don */}
                  {(selectedAmount || customAmount) && (
                    <div className="donation-impact">
                      <h6>Impact de votre don de {selectedAmount || customAmount}€ :</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <p><i className="fas fa-plane text-primary me-2"></i>Contribution au transport</p>
                          <p><i className="fas fa-bed text-primary me-2"></i>Participation à l'hébergement</p>
                        </div>
                        <div className="col-md-6">
                          <p><i className="fas fa-ticket-alt text-primary me-2"></i>Accès aux conférences</p>
                          <p><i className="fas fa-utensils text-primary me-2"></i>Repas sur place</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2>Ce Que Disent Nos Donateurs</h2>
                <p className="lead">Merci pour votre confiance et votre soutien</p>
              </div>
              
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card testimonial-card h-100">
                    <div className="card-body">
                      <div className="stars mb-3">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="card-text">"Un projet formidable ! Ces étudiants méritent notre soutien pour cette expérience enrichissante."</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Marie L., Ancienne étudiante CESI</cite>
                      </footer>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                  <div className="card testimonial-card h-100">
                    <div className="card-body">
                      <div className="stars mb-3">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="card-text">"Excellente initiative ! Le Dublin Tech Summit est un événement de référence dans le domaine tech."</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Jean-Pierre M., Entrepreneur</cite>
                      </footer>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                  <div className="card testimonial-card h-100">
                    <div className="card-body">
                      <div className="stars mb-3">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="card-text">"Transparence totale sur l'utilisation des fonds. Je recommande vivement ce projet !"</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">Sophie D., Mère d'étudiant</cite>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
