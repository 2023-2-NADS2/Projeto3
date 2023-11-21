
import React, { useState, useEffect } from 'react';
import './Contribute.css';

function Contribute() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    valor: 0,
  });
  console.log(formData)

  const handleDonateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'valor' ? parseFloat(value) : value,
    });
  };
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://violeta-back-57a665b7dbbc.herokuapp.com/Doador/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Doação enviada com sucesso!');
        handleCloseModal(); 
        history.push('/'); 
        
        
      } else {
        alert('Falha ao enviar a mensagem. Tente novamente.');
        handleCloseModal(); 
        history.push('/');
        
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      
    }
  };

  useEffect(() => {
    // Função para obter os dados
    const getData = async () => {
      try {
        const response = await fetch('https://violeta-back-57a665b7dbbc.herokuapp.com/Doador/soma'); // Substitua pela URL da sua API
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Erro ao obter dados:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    // Chama a função ao montar o componente
    getData();
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="contribute">
      <section className="contribute-header">
        <h1>TRANSFORME VIDAS HOJE</h1>
        <p>sua generosidade permite que o projeto ultrapasse fronteiras!</p>
        <h1>Doaçoes recebidas</h1>
      {data ? (
       <h1>{formatCurrency(data)}</h1>
      ) : (
        <p>Carregando dados...</p>
      )}
      </section>

      <section className="donation-methods">
        <h2>Escolha Sua Forma de Contribuir</h2>
        <div className="donation-option">
          <h3>DOAÇÃO ÚNICA</h3>
          <p>Uma única doação pode fazer a diferença. Escolha o quanto deseja doar e ajude-nos a alcançar nossos objetivos.</p>
          <button onClick={handleDonateClick}>Doar Agora</button>
        </div>
        <div className="donation-option">
          <h3>PATROCINADOR</h3>
          <p>Torne-se um parceiro, entre em contato conosco via whatsapp e saiba mais.</p>
          <button onClick={() => window.location.href = '/contact'}>Tornar-se Parceiro</button>
        </div>
      </section>

      <section className="encouraging-message">
        <h2>Juntos, Podemos Mais!</h2>
        <p>Cada contribuição nos leva mais perto de um mundo melhor. Sua doação hoje é um investimento na construção de um futuro mais brilhante para todos.</p>
      </section>

      {showModal && (
        <div className="donation-modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <div className="contact-form">
            <h2>Informe sua doação</h2>
            <form onSubmit={handleSubmit}>
            <input type="text"
              name="nome"
              placeholder="Seu Nome"
              required
              value={formData.nome}
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
            <input type='number'
              name="valor"
              placeholder="Valor da sua doação"
              required
              value={formData.valor}
              onChange={handleInputChange}
            />
            <button type="submit">Enviar doação</button>
          </form>
          </div>
          <br>
          </br>


            <h1>Detalhes para Doação</h1>
            <div className="bank-details">
              <h1>Dados Bancários</h1>
              <p>Banco: [Nome do Banco]</p>
              <p>Agência: [Número da Agência]</p>
              <p>Conta: [Número da Conta]</p>
              <p>Titular: [Nome do Titular]</p>
            </div>
            <div className="pix-details">
              <h1>Chave PIX</h1>
              <p>[Chave PIX]</p>
            </div>

     

            
          </div>
          
        </div>
        
        
        

        
      )}
    </div>
  );
}

export default Contribute;
