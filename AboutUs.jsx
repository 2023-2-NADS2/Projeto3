// AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import ElizPerfil from './imagesAboutUs/ElizPerfil.jpeg'
import GerandoFalcoes from './imagesAboutUs/logo-gerando-falcoes.png'
import InstitutoCEA from './imagesAboutUs/institutocea.jpg'
import FeitoFormiguinhas from './imagesAboutUs/feito_formiguinha.jpg'
import i4us from './imagesAboutUs/I4US_Logotipo.png'

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-header">
        <h1>QUEM SOMOS</h1>
        <p>Conheça mais sobre nossa missão e os valores que nos guiam.</p>
      </section>
      <section className="about-us-content">
        <p>
        Acreditamos em uma atuação social além de trocas utilitárias. 
        É crucial construir relacionamentos saudáveis, compreendendo profundamente a complexidade da realidade. 
        Enxergamos diversas questões inter-relacionadas, sendo essa compreensão fundamental para criar 
        oportunidades de transformação efetivas. Buscamos não apenas eficiência no atendimento, 
        mas estabelecer relacionamentos saudáveis, visando intencionalmente restaurar e fortalecer a dignidade, 
        valores humanos, esperança e sonhos. Estes elementos, uma vez trabalhados, 
        tornam-se alicerces para superar obstáculos e desafios que antes pareciam difíceis demais.
        </p>
        <div className='topic-card'>
          <h2>Nossa Missão</h2>
          <p>Quebrar as barreiras de isolamento e não pertencimento de mulheres no mundo do trabalho, por meio de
            acolhimento empático, reconhecimento e valorização de suas histórias.</p>
        </div>
        <div className='topic-card'>
          <h2>Nossa Visão</h2>
          <p>Ser referência no cuidado e desenvolvimento de carreiras femininas e transformar as políticas públicas
            de trabalho e renda para todas as meninas e mulheres do Brasil!</p>
        </div>
        <div className='topic-card'>
          <h2>Nossos Valores</h2>
          <p><strong>Escuta:</strong> A atenção e consideração pela voz e história de cada indivíduo.<br />
            <strong>Empatia:</strong> A capacidade de se colocar no lugar do outro e entender suas emoções e perspectivas.<br />
            <strong>Colaboração:</strong> O esforço conjunto para alcançar um objetivo comum, valorizando o trabalho em equipe.<br />
            <strong>Inclusão:</strong> A garantia de acesso e oportunidades para todos, independente de suas diferenças.<br />
            <strong>Valorização Humana:</strong> O reconhecimento da dignidade e valor de cada pessoa.<br />
            <strong>Responsabilidade Social:</strong> O compromisso de contribuir para uma sociedade mais justa e equitativa.
          </p>
        </div>
      </section>
      <section className="about-us-ceo">
        <div className="ceo-image">
          <img src={ElizPerfil} alt="CEO da ONG" />
        </div>
        <div className="ceo-description">
          <h3>Preta Eliz</h3>
          <p>Fundadora e CEO da ONG Violeta Eliz</p>
        </div>
      </section>
      <section className="about-us-team">
        <h2>Conheça Nossa Equipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src={GerandoFalcoes} alt="Gerando Falcões" />
            </div>
            <div className="member-info">
              <h4>Gerando Falcões</h4>
              <p>O foco da Gerando Falcões são iniciativas transformadoras, capazes de gerar resultados de longo prazo e, para isso, entregamos serviços de educação, desenvolvimento econômico e cidadania em favelas, e executamos programas de transformação sistêmica, como o Favela 3D.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={InstitutoCEA} alt="Nome do Membro" />
            </div>
            <div className="member-info">
              <h4>Instituto C&A</h4>
              <p>Um pilar social a mais de 30 anos, fortalece as comunidades por meio da moda- desenvolvendo ações voluntárias, projeto e fomentado o empreendedorismo local.
                O instituto C&A vem para fortalecer as redes, com parcerias em todo o estados brasileiros, dentro elas a Ong Violeta Eliz.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={FeitoFormiguinhas} alt="Nome do Membro" />
            </div>
            <div className="member-info">
              <h4>Feito Formiguinhas</h4>
              <p>O Feito Formiguinhas é um grupo de 51 amigos com diversas profissões, que se encontraram com o propósito de fazer o bem, sem nenhum fim político ou religioso.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={i4us} alt="Nome do Membro" />
            </div>
            <div className="member-info">
              <h4>I4us</h4>
              <p>A INTELLIGENCE FOR US acredita na transparência das relações e no poder da parceria. Educação tecnológica com responsabilidade social e ambiental além de trabalhar no resgate do protagonismo dos jovens atendidos.</p>
            </div>
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

export default AboutUs;
