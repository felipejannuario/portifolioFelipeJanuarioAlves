const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROTA DE ENVIO DE EMAIL
app.post('/send-email', async (req, res) => {
  console.log('📨 Dados recebidos:', req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Campos obrigatórios ausentes' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Mensagem de ${name} (${email})`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
  } catch (err) {
    console.error('❌ Erro ao enviar email:', err);
    res.status(500).json({ success: false, message: 'Erro ao enviar email.' });
  }
});

// ROTA TESTE
app.get('/', (req, res) => {
  res.send('🚀 API do portfólio está online!');
});

// PORTA
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));

