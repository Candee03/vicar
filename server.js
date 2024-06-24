const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // o el servicio de correo que prefieras
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Ruta para enviar correos electrónicos
app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const mailOptions = {
    from: email,
    to: email,
    subject: subject,
    // FORMATO DEL CORREO QUE SE VA A ENVIAR
    text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
