import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as brevo from '@getbrevo/brevo';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration de Brevo
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

// Route pour envoyer un email de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Validation des données
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tous les champs sont requis' 
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Adresse email invalide' 
      });
    }

    // Création de l'email
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.subject = `Nouveau message de contact - ${firstName} ${lastName}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Nouveau message de contact
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Informations du contact :</h3>
          <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message :</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
          <p>Ce message a été envoyé depuis le formulaire de contact du site CESI to Dublin 2026.</p>
          <p>Date d'envoi : ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `;
    
    sendSmtpEmail.textContent = `
Nouveau message de contact

Informations du contact :
- Nom : ${firstName} ${lastName}
- Email : ${email}

Message :
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site CESI to Dublin 2026.
Date d'envoi : ${new Date().toLocaleString('fr-FR')}
    `;
    
    sendSmtpEmail.sender = { 
      name: "CESI to Dublin 2026", 
      email: process.env.BREVO_SENDER_EMAIL 
    };
    
    sendSmtpEmail.to = [{ 
      email: process.env.BREVO_EMAIL, 
      name: "CESI to Dublin 2026" 
    }];
    
    sendSmtpEmail.replyTo = { 
      email: email, 
      name: `${firstName} ${lastName}` 
    };

    // Envoi de l'email
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log('Email envoyé avec succès:', result);
    
    res.json({ 
      success: true, 
      message: 'Message envoyé avec succès ! Nous vous répondrons bientôt.' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' 
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Serveur fonctionnel',
    timestamp: new Date().toISOString()
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📧 Emails de contact envoyés vers : ${process.env.BREVO_EMAIL}`);
  console.log(`🔗 API disponible sur : http://localhost:${PORT}/api`);
});

export default app;
