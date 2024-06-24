import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            } else {
            setError(true);
            }
        })
        .catch(() => setError(true));
    };

    return (
        <div>
        {submitted && <p>¡Gracias! Tu mensaje ha sido enviado.</p>}
        {error && <p>¡Vaya! Hubo un error. Por favor, intenta de nuevo.</p>}
        {!submitted && (
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="subject">Asunto</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Enviar</button>
            </form>
        )}
        </div>
    );
};

export default Form;
