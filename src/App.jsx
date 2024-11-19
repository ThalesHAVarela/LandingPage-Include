

import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Sobre">
          <Box sx={{ backgroundImage: `url('/images/fotohalloweenThales.jpg')`,backgroundSize: 'cover',backgroundPosition: 'center', display:'flex', height:"600px",marginBottom:2, justifyContent:"flex-start", alignItems:"flex-start",padding:"60px",margin:"20px",borderRadius:'10px'}}>
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
              <a href="https://www.instagram.com/engenhariainclude?igsh=Ynl1Z3hwMXB2YTJv" target="_blank" rel="noopener">Entre em contato</a>

            </ul>
          </Box>
        </section>
        <section id="Candidatos">
          <Box sx={{ backgroundImage: `url('/images/fotohalloween6.png')`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundPositionY:'900px' ,display:'flex', height:"600px",marginBottom:2, justifyContent:"center", alignItems:"center",borderRadius:'10px',padding:"10px",margin:"20px"}}>
            <h7>hello world </h7>
          </Box>
        </section>
        <section id="Contato">
          <Box sx={{ bgcolor:"blueviolet",display:'flex', height:"200px", justifyContent:"center", alignItems:"center"}}>
            <h7>hello world </h7>
          </Box>
        </section>
      </main>
    </>
  );
}

export default App;

