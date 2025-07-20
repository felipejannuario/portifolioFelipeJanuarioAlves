const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const transporter = require("./nodemailer-config");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "Mensagem do Portfólio",
    text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao enviar e-mail", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const cors = require("cors");

// Apenas permite seu domínio acessar
app.use(cors({
  origin: "https://www.felipejanuarioalves.com.br",
}));
const helmet = require("helmet");
app.use(helmet());

console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
