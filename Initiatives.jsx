// initiatives.jsx
import React from 'react';
import './Initiatives.css';
import VioletaCidadaes from './imagesInitiatives/VioletaCidadaes.jpeg'
import CartaoAlimentacao from './imagesInitiatives/CartaoAlimentacao.jpeg'
import CinemaNoMorro from './imagesInitiatives/CinemaNoMorro.jpg'


function Initiatives() {
  return (
    <div className="initiatives">
      <section className="initiative">
        <div className="initiative-content">
          <div className="initiative-text">
            <h2>VIOLETA CIDADÃS</h2>
           
            <p>Juntos na missão pelo bem, integramos o ecossistema da Gerando Falcões,
               estabelecendo parcerias para garantir direitos básicos, incluindo alimentação e gás de cozinha. 
              Até agora, beneficiamos 244 famílias com 5 meses de fornecimento de gás.</p></div>
              
          <div className="initiative-image">
            <img src={VioletaCidadaes} alt="Descrição da Iniciativa" />
          </div>
        </div>
      </section>

      <section className="initiative">
        <div className="initiative-content">
          <div className="initiative-text">
            <h2>CARTÃO ALIMENTAÇÃO</h2>
            <p>A fome durante a pandemia tornou-se evidente nas vielas das favelas. A Rede GF também promoveu uma campanha com cartões de alimentação no valor de R$ 300 por família, chamada "Corona no Paredão". Foram atendidas 450 famílias com cestas digitais.</p>
          </div>
          <div className="initiative-image">
            <img src={CartaoAlimentacao} alt="Descrição da Iniciativa" />
          </div>
        </div>
      </section>

      <section className="initiative">
        <div className="initiative-content">
          <div className="initiative-text">
            <h2>CINEMA NO MORRO</h2>

            <p>"Cinema no Morro" é um evento destinado a jovens entre 12 e 17 anos. Abordamos temas do cotidiano nas favelas, estimulando o desejo de criar e desenvolver narrativas cinematográficas.</p>
            
          </div>
          
          <div className="initiative-image">
            <img src={CinemaNoMorro} alt="Descrição da Iniciativa" />
          </div>
        </div>
      </section> 
      
      
      <section className="about-us-cta">
        <h2>AJUDE-NOS A FAZER A DIFERENÇA</h2>
        <p>Sua contribuição pode transformar vidas e fortalecer nossa comunidade. Junte-se a nós!</p>
        <button onClick={() => window.location.href = '/contribute'}>Contribua Agora</button>
      </section>

    </div>
  );
}

export default Initiatives;
