import React from 'react'
import {  Box,
          Typography, 
          Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import bg from '../images/bg8.avif'
import vid from '../images/GridBoxVideo.mp4'


const TheGridBox = () => {
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
            <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>The GridBox</b></Typography>
            <a href="https://thegridbox.vercel.app/" target='_blank'>
              <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>Visit the Site! 🌐</Typography>
            </a>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              The popularity of Formula 1 has been on a meteoric rise in recent years, capturing the hearts and minds of a global audience like never before. With its thrilling races, cutting-edge technology, and charismatic drivers, Formula 1 has become a sporting spectacle that transcends borders and demographics.
              To seize the growing opportunity and to turn my passion of Formula 1 into something real, I developed "The GridBox" - a Formula 1 Information Website.
            </Typography>
            
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              <h3>Features:</h3>
              <ul>
                <li>View the next race and its timings.</li>
                <li>View Driver or Constructor Standings for any year.</li>
                <li>View the Schedule of Races.</li>
                <li>Read Blogs written by me.</li>
                <li>View Information about the various drivers and constructors.</li>
                <li>View Circuit Information and their Locations.</li>
              </ul>
            </Typography>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",marginBottom:'1.5vw',paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              <h3>Tasks Performed:</h3>
              <ul>
                <li>Developed a React based Front-end user facing website with Material UI and React Router DOM.</li>
                <li>Developed an Express based server to communicate with the Front-End and provide the requested data.</li>
                <li>Developed an information storage technique which allows to store data on MongoDB - allowing maximum availability of data and least amount of downtime.</li>
              </ul>
            </Typography>
             <div style={{textAlign:'center',paddingTop:50}}>
              <video controls autostart autoPlay src={vid} type="video/mp4"  style={{maxWidth:'90%'}}/>
             </div>
            </Paper>
        </Box>
    </>
  )
}

export default TheGridBox