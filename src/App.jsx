

import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Sobre">
          <Box sx={{ backgroundImage: `url('/images/fotohalloweenThales.jpg')`,backgroundSize: 'cover',backgroundPosition: 'center'
            ,display:'flex', height:"600px",marginBottom:2, justifyContent:"flex-start", alignItems:"flex-start",padding:"60px",margin:"20px",borderRadius:'10px'}}>
            <ul className='infolist'>
              <h2>Sobre a Include</h2>
              <li>Desde 2015, transformando ideias em inovação !</li>
              <li>Soluções digitais e automação para impulsionar o seu negócio. Conecte-se ao futuro com a gente !</li>
              <li>Na Include, nosso compromisso vai além de simplesmente desenvolver um projeto. 
                Seguimos um processo cuidadoso e eficiente, desde a identificação das suas necessidades até o acompanhamento pós-entrega
                grantindo que cada etapa seja pensada e executada com precisão.</li>
                <div id='divinclude1'>
                <ul>
                  <li>Identificamos o problema</li>
                  <li>Projetamos a solução ideal</li>
                  <li>Desenvolvemos com excelência</li>
                  <li>Entregamos com qualidade</li>
                  <li>Acompanhamos e melhoramos continuamente</li>
                </ul>
                </div>
              <li>
                Na nossa empresa júnior, o primeiro passo para criar um projeto que realmente atenda às suas necessidades
                é entender cada detalhe do que você precisa !
              </li>
              <li>
                Quer saber mais como podemos ajudar sua empresa a crescer ? Entre em contato agora e vamos começar !
              </li>
              <a href="https://www.instagram.com/engenhariainclude/profilecard/?igsh=Ynl1Z3hwMXB2YTJv" target="_blank" rel="noopener">Entre em contato</a>

            </ul>
          </Box>
        </section>
        <section id="Candidatos">
          <Box sx={{ backgroundImage: `url('/images/fotohalloween6.png')`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundPositionY:'900px' 
            ,display:'flex',flexDirection:'column',gap:'30px', height:"600px", marginBottom:2 ,borderRadius:'10px',padding:"10px",margin:"20px"}}>
            <div id='divcandidatos1'>
              <h1>Candidatos</h1>
              <h2>Thales Henrique de Almeida Varela</h2>
            </div>
            <div id='divcandidatos2'>
              <div >
                <h2> Competências</h2>
                <ul id='ulcandidatos'>
                  <li>Trabalho em equipe</li>
                  <li>Boa comunicação</li>
                  <li>Empatia</li>
                  <li>Flexibilidade e adaptabilidade</li>
                </ul>
              </div>
              <img src='images/fotoThales.jpeg' width="200vw" ></img>
            </div>
            <div id='sobre-mim-box'>
              <div className='sobre-mim-box2'>
                <h2> Habilidades/Interesses </h2>
                <ul className='sobre-mim-list'>
                  <li>Ênfase em Engenharia da Computação.</li>
                  <li>Conhecimentos de Front-end com Javascript, HTML5, CSS3, React.JS .</li>
                  <li>Conhecimentos Básicos de Back-end com Java e SpringBoot.</li>
                </ul>
              </div>
              <div className='sobre-mim-box2'>
                <h2>Outros projetos </h2>
                <ul className='sobre-mim-list'>
                  <li><a href='https://github.com/ThalesHAVarela/Tela-login' target="_blank" rel="noopener">Tela de login simples</a></li>
                  <li><a href='https://github.com/ThalesHAVarela/Pagina-de-concurso' target="_blank" rel="noopener"> Página-de-concurso</a></li>
                  
                </ul>
              </div>
              <div className='sobre-mim-box2'>
                <h2>Porque deve entrar na Include?</h2>
                <ul className='sobre-mim-list'>
                  <li>Procurando experiência profissional ainda na faculdade.</li>
                  <li>Participar da empresa junior especializada em computação para criar experiência técnica.</li>
                  <li>Networking - conhecer pessoas ligadas ao mesmo ramo de atuação através de eventos e/ou trabalhos</li>
                </ul>
              </div>
            </div>
          </Box>
        </section>
        <section id="Rodapé">
          <Box sx={{ bgcolor: "#240046",display:'flex', height:"200px", justifyContent:"center", alignItems:"center"}}>
            <div id='divfooter'>
              <h2> My landing page </h2>
              <h3> Contato - Redes sociais</h3>
              <div>
              <ul>
                <li><a href='https://www.instagram.com/_thalesvarela/profilecard/?igsh=MXVrZTh2cjAxdGk3Yg==' target="_blank" rel="noopener"> Instagram </a></li>
                <li><a href='https://github.com/ThalesHAVarela' target="_blank" rel="noopener"> Github</a></li>
              </ul>
              </div>
              
            </div>
          </Box>
        </section>
      </main>
    </>
  );
}

export default App;
