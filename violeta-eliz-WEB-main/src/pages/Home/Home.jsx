import React from 'react';
import MyCarousel from '../../components/Carousel/Carousel';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <MyCarousel />

      <section className="home-introduction">
        <br></br>
        <br></br>
       
        
        <h1>BEM-VINDO AO VIOLETA ELIZ</h1>
        <p>Descubra a história de como uma pequena iniciativa se tornou uma força transformadora em nossa comunidade.</p>
      </section>

      <section className="home-story">
        <h2>UMA JORNADA DE EMPONDERAMENTO</h2>
        <p>No coração da cidade, onde as vozes das comunidades marginalizadas ecoavam sem serem ouvidas, nasceu a Violeta Eliz. Fundada por uma mulher que acreditava no poder da empatia e da ação, nossa ONG começou como um pequeno grupo de voluntários determinados a fazer a diferença.</p>
        <p>Ao longo dos anos, enfrentamos desafios, celebramos conquistas e, acima de tudo, aprendemos o valor da resiliência e da união. Cada história de sucesso de nossa comunidade reforça nossa missão de continuar lutando por um mundo mais justo e igualitário.</p>
      </section>

      <section className="home-impact">
        <h2>O IMPACTO QUE CRIAMOS</h2>
        <p>Nossos programas visam não apenas atender às necessidades imediatas, mas também empoderar indivíduos para que se tornem agentes de mudança em suas próprias vidas. Da educação infantil ao apoio a empreendimentos liderados por mulheres, nosso objetivo é criar oportunidades sustentáveis para crescimento e desenvolvimento.</p>
        <p>Com cada iniciativa, estamos construindo uma comunidade mais forte e resiliente, capaz de superar adversidades e prosperar.</p>
      </section>

      <section className="home-invitation">
        <h2>SEJA PARTE DA NOSSA MUDANÇA</h2>
        <p >Convidamos você a se juntar a nós nesta jornada empolgante. Seu apoio, seja através de tempo, recursos ou divulgação, pode fazer uma diferença significativa. Juntos, podemos continuar a escrever esta história de sucesso e impacto.</p>
        <button onClick={() => window.location.href = '/contribute'}>Contribua Agora</button>
        <button onClick={() => window.location.href = '/contact'}>Entre em Contato</button>
      </section>
    </div>
  );
}

export default Home;
