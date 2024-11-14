import { Box } from '@mui/material'
import React from 'react'


function App() {

  return (
    <>
    <Box sx={{bgcolor:"blueviolet", backdropFilter: "blur(5px)",display:'flex', height:"30px",marginBottom:2, justifyContent:"center", alignItems:"center",borderRadius: '10px'}}>
      <h1 style={{color:' #ff8c00'}} >INCLUDE ENGENHARIA </h1>
      
    </Box>
    <Box sx={{bgcolor:"#28292b", display:'flex',height:"400px",marginBottom:1, borderRadius: '20px',justifyContent:"center"}}>
      <h7 >hello world </h7>
    </Box>
    <Box sx={{bgcolor:"#28292b", display:'flex',height:"400px",borderRadius: '20px',justifyContent:"center"}}>
    <h7 >hello world </h7>
    </Box>
    </>
  )
}

export default App
