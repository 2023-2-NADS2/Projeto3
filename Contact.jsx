import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Falha ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Erro ao enviar a mensagem.');
    }
  };
  
  return (
    <div className="contact">
      <section className="contact-header">
        <h1>ENTRE EM CONTATO</h1>
        <p>Tem alguma pergunta ou quer se tornar um patrocinador? Estamos aqui para ajudar.</p>
      </section>

      <section className="contact-info">
        <div className="contact-details">
          <h2>Informações de Contato</h2>
          <p><strong>Email:</strong> ongasvioletas@gmail.com</p>
          <p><strong>Telefone:</strong> (11) 982935150</p>
          <p><strong>Endereço:</strong> R. 12 DE OUTUBRO, 33 - CIDADE DUTRA, SÃO PAULO - SP</p>
        </div>

        <div className="contact-form">
          <h2>Mande uma Mensagem</h2>
          <form onSubmit={handleSubmit}>
            <input type="text"
              name="name"
              placeholder="Seu Nome"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
