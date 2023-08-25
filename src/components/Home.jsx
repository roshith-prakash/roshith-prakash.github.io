import React from 'react'
import { Link, Typography } from '@mui/material'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Info from './Info'
import End from './End'
import bg from '../images/bg8.avif'

const Home = () => {
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

          <Typography variant='h2' sx={{fontSize:{xs:'4vw',md:'1.5vw'}}}><b>My Info : </b></Typography>
          <Link href="#about" underline="hover" sx={{fontSize:{xs:'4vw',md:'1.5vw'}}}>About</Link>
          <Link href="#skills" underline="hover" sx={{fontSize:{xs:'4vw',md:'1.5vw'}}}>Skills</Link>
          <Link href="#education" underline="hover" sx={{fontSize:{xs:'4vw',md:'1.5vw'}}}>Education</Link>
          <Link href="#info" underline="hover" sx={{fontSize:{xs:'4vw',md:'1.5vw'}}}>Personal Info</Link>
        </div>
        <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <div id="about"><About/></div>
          <div id="skills"><Skills /></div>
          <div id="education"><Education /></div>
          <div id="info"><Info/></div>
          <div><End/></div>
        </div>
    </>
  )
}

export default Home