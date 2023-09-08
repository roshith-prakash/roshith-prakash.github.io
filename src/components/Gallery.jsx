import React from 'react'
import {  Box,
          Typography, 
          Paper} from '@mui/material'
import { Link } from 'react-router-dom'
import bg from '../images/bg8.avif'
import gallery from '../images/gallery.png'

const Gallery = () => {
  return (
  <>
        <div style={{
          position:'fixed',
          zIndex:'2',
          backgroundColor:"#fff",
          padding:'1vw',
          width:'100%',
          display:'flex',
          justifyContent:'space-around',
          borderBottom:"0.5vw solid #000",
          boxSizing:'border-box'
        }}>
            <Link to='/' style={{fontSize:'1.5vw'}}>⬅️ Go Back</Link>
        </div>
         <Box component="div" 
              sx={{
                width:'100%',
                paddingBottom:'5vw',
                boxSizing:'border-box',
                paddingTop:'5vw',
                minHeight:'100vh',
                backgroundImage:`url(${bg})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
              }}
        >
          <Paper elevation={10} sx={{marginTop:'5%',padding:'2vw',width:'90%',margin:'auto'}}>
            <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>The Gallery</b></Typography>
            <a href="https://gallery-rp.vercel.app/" target='_blank'>
              <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>Visit the Site! 🌐</Typography>
            </a>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}> 
                Developed a Single Page App (SPA) React JS application to search and display images from the 
                Internet as required by the user.
                Technologies used for developing the project: HTML, CSS, React, React Query, Material UI, Axios.
                Powered by the Pexels API.
                              
            </Typography>
            
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              <h3>Features:</h3>
              <ul>
                <li>Displays curated images for the day.</li>
                <li>Allows users to search for images using prompts.</li>
                <li>Allows users to view images in a larger resolution by clicking on the image (For Smaller Screens).</li>
              </ul>
            </Typography>

            <div style={{marginTop:70,textAlign:'center'}}>
              <img src={gallery} style={{maxWidth:'90%',margin:'auto'}}/>
            </div> 
            </Paper>
        </Box>
    </>
  )
}

export default Gallery