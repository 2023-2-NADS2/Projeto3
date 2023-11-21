// Projects.jsx
import React from 'react';
import './Projects.css';
import projectImage1 from './imagesProjects/projeto1.jpeg';
import projectImage2 from './imagesProjects/projeto2.jpeg';
import projectImage3 from './imagesProjects/projeto3.jpeg';

function Projects() {
  return (
    <div className="projects">
      <section className="projects-header">
        <h1>PROJETOS</h1>
        <p>Conheça nossos projetos em andamento.</p>
      </section>
      {/* Projeto 1 */}
      <div className="project-block">
        <section className="projects-content">
          <div className="project-text">
           
          <ul> <p>
            Em um mundo digital e tecnológico, garantir acesso universal às oportunidades é crucial. 
            O projeto "Tecnologia para a Comunidade" busca capacitar jovens periféricos em habilidades de tecnologia e programação. Acreditando na acessibilidade tecnológica para todos, 
            busca transformar a realidade das comunidades periféricas por meio de pilares fundamentais.

            </p>
          
              <li><strong>Acesso à Educação de Qualidade</strong>: Proporcionamos educação de alta qualidade em tecnologia por meio de cursos, 
              workshops e mentorias ministrados por profissionais experientes.</li>

              <li><strong>Inclusão Digital</strong>: Reconhecendo que muitos jovens das periferias 
              Superamos barreiras ao oferecer laboratórios de informática e acesso gratuito à internet, 
              garantindo que todos tenham as ferramentas necessárias para aprender e praticar.</li>

              <li><strong>Aprendizado Prático e Criativo</strong>: Adotamos uma abordagem prática e criativa, 
              incentivando os jovens a aplicar conhecimentos em projetos reais que solucionam desafios da comunidade.</li>

              <li><strong>Empreendedorismo e Empregabilidade</strong>: Além das habilidades técnicas, 
              orientamos sobre empreendedorismo, preparando para startups ou ingresso no mercado de trabalho, 
              estabelecendo parcerias com empresas locais.</li>

              <li><strong>Comunidade e Networking</strong>: Promovemos uma comunidade unida, onde os participantes interagem, 
              compartilham ideias e experiências, formando uma rede de apoio para impulsionar suas trajetórias profissionais.</li>

              <li><strong>Acompanhamento Contínuo</strong>:Vai além do ensino técnico, oferecendo acompanhamento contínuo 
              e suporte aos jovens, assegurando seu desenvolvimento e perseguição de metas após a conclusão dos cursos.</li>
            </ul>
           
          </div>
          <div className="project-image">
            <img src={projectImage1} alt="Projeto 1" />
          </div>
        </section>
      </div>
      {/* Projeto 2 */}
      <div className="project-block">
        <section className="projects-content">
          <div className="project-text">
          <ul><p>
            O projeto "Esporte para a Comunidade" visa difundir o skate, amado em muitas comunidades, 
            para promover bem-estar. Além de proporcionar acesso ao skate, busca criar oportunidades 
            e impactar positivamente vidas. Fundamentado em princípios transformadores, 
            busca promover valores positivos e benefícios tangíveis além das fronteiras locais.
            </p>
            
           
              <li><strong>Acesso Universal ao Skate:
              </strong> O projeto visa democratizar o acesso ao skate, 
              oferecendo espaços públicos gratuitos e equipamentos básicos, 
              eliminando barreiras financeiras e geográficas.</li>
              
              <li><strong>Inclusão e Diversidade:</strong> 
              o projeto cria um ambiente acolhedor para todos interessados no skate, independentemente de idade, gênero, raça ou origem.</li>
              
              <li><strong>Educação e Segurança:</strong> 
              o projeto destaca a importância da educação em segurança, 
              com instrutores qualificados orientando sobre práticas responsáveis.</li>
              
              <li><strong>Desenvolvimento Pessoal e Comunitário:</strong> O skate é uma ferramenta para desenvolvimento pessoal, 
              que promove autoestima, confiança e habilidades sociais, incentivando a participação ativa na comunidade.</li>

              <li><strong>Desenvolvimento Profissional:</strong> O projeto abre portas para carreiras no skate, 
              oferecendo cursos e orientação para atletas, instrutores e profissionais da indústria relacionada.</li>
              
              <li><strong>Conexões Globais:</strong> Além do local, o projeto busca conexões globais, 
              criando parcerias com comunidades e organizações em todo o mundo.</li>
            </ul>
            
          </div>
          <div className="project-image">
            <img src={projectImage2} alt="Projeto 2" />
          </div>
        </section>
      </div>
      {/* Projeto 3 */}
      <div className="project-block">
        <section className="projects-content">
          <div className="project-text">
          <ul>
            <p>
              O projeto "Elas para o Empoderamento das Mulheres para o Mundo" é uma iniciativa que visa capacitar e inspirar mulheres de todas as idades e origens a se destacarem em suas vidas e carreiras, permitindo que elas alcancem todo o seu potencial.
            </p>
            <li><p><strong>Empoderamento Feminino em Foco:</strong> O projeto fortalece mulheres com habilidades práticas, educação e apoio emocional, 
            oferecendo oportunidades para desenvolver competências profissionais e conquistar independência financeira.</p></li>
            
            <li><p><strong>Acesso a Educação e Capacitação:</strong> Proporcionando educação de qualidade e workshops abrangentes, 
            capacita mulheres em liderança, empreendedorismo e habilidades técnicas,
             fornecendo conhecimentos relevantes para suas aspirações.</p></li>
            
             <li><p><strong>Mentoria e Networking:</strong> destaca a importância da mentoria e networking, 
            permitindo que mulheres compartilhem experiências, 
            recebam orientação e estabeleçam conexões valiosas para progredir em suas jornadas.</p></li>
            
              
              <li><strong>Inclusão e Diversidade:</strong> o projeto cria um ambiente acolhedor para mulheres e 
              incentiva a partilha de experiências e fortalece a comunidade feminina.</li>
              
              <li><strong>Liderança e Ativismo:</strong> o projeto fomenta o desenvolvimento de líderes e ativistas, 
              reconhecendo o potencial das participantes para causar impacto positivo em suas comunidades.</li>
              
              <li><strong>Advocacia e Empoderamento Global:</strong> O projeto 
              defendendo a igualdade de gênero e os direitos das mulheres em todo o mundo.</li>
            </ul>
            
          </div>
          <div className="project-image">
            {/* Certifique-se de substituir 'projectImage3' pelo caminho correto da imagem */}
            <img src={projectImage3} alt="Projeto 3" />
          </div>
        </section>

      </div>
    </div>
  );
}


export default Projects;
