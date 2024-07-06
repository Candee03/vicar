import React, { useState } from 'react';
import './form.scss'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //MODIFICAR
        fetch(`http://localhost:5000/send-email`, {
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
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
            } else {
            setError(true);
            }
        })
        .catch(() => setError(true));
    };

    return (
        <div className='container-form'>
            <form className='from' onSubmit={handleSubmit}>
                <div className='div-input'>
                    <input className='input-from' placeholder='Nombre' type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className='div-input'>
                    <input className='input-from' placeholder='Apellido' type="text" name='lastName' value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className='div-input'>
                    <input className='input-from' placeholder='E-mail' type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='div-input'>
                    <input className='input-from' placeholder='Teléfono' type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className='div-textarea'>
                    <textarea className='textarea-form' placeholder='Tu consuta' name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                {error && <p className='p-message-form'>¡Vaya! Hubo un error. Por favor, intenta de nuevo ⚠️</p>}
                {submitted && <p className='p-message-form'>¡Gracias! Tu consulta ha sido enviada✅</p>}
                <button className='btn-submit' type="submit">Cotizar</button>
            </form>
        </div> 
    );
};

export default Form;
