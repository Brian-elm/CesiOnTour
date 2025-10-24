import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Erreur de connexion. Veuillez vérifier que le serveur est démarré et réessayer.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="row g-3">
      {submitStatus && (
        <div className="col-12">
          <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}>
            <i className={`fas fa-${submitStatus.type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2`}></i>
            {submitStatus.message}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setSubmitStatus(null)}
            ></button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input 
            type="text" 
            className="form-control" 
            id="firstName" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Nom</label>
          <input 
            type="text" 
            className="form-control" 
            id="lastName" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            required 
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button 
            type="submit" 
            className={`btn btn-primary btn-lg px-5 ${isSubmitting ? 'disabled' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i>Envoi en cours...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane me-2"></i>Envoyer le Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
