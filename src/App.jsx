

import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Sobre">
          <Box sx={{ backgroundImage: `url('/images/fotohalloweenThales.jpg')`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display:'flex', height:"500px",marginBottom:2, justifyContent:"flex-start", alignItems:"flex-start",padding:"60px",margin:"20px",borderRadius:'10px'}}>
            <ul className='infolist'>
              <h2>Sobre a Include</h2>
              <li>topico 1</li>
              <li>topico 2</li>
              <li>topico 3</li>
            </ul>
          </Box>
        </section>
        <section id="Candidatos">
          <Box sx={{ bgcolor:"#373739",display:'flex', height:"500px",marginBottom:2, justifyContent:"center", alignItems:"center",borderRadius:'10px',padding:"10px",margin:"20px"}}>
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

