import React from 'react'
import {  Box,
          Typography, 
          Paper} from '@mui/material'
import { Link } from 'react-router-dom'
import bg from '../images/bg8.avif'
import sm1 from '../images/smartpower1.png'
import sm2 from '../images/smartpower2.png'

const SmartPower = () => {
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
            <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>SmartPower (Final Year Project) </b></Typography>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>

              The majority of the modern world depends on an energy delivery system that, according to the existing state of affairs, is ineffective and unable to keep up with the expanding needs. Innovation and technology have transformed other industrial sectors while the electricity grid has continued to operate in the same inefficient way for decades. Thus, newer technology and innovations need to be applied in this inefficient system.
              The developed project is a Smart-metering system which is based on the ‘smart grid’ philosophy of having an interconnected network of measuring devices for utilities. The smart grid philosophy is in turn derived from the ‘smart city’ concept which focuses on automation of tasks and overall increased efficiency in all areas.
              The recording of energy consumption data is a tedious and time consuming manual process which has been automated in the developed system. The SmartPower system allows for the digital transfer of energy consumption data at regular intervals and allows for a more granular measurement of energy consumption, which will allow for a deeper analysis and understanding of the consumption.
              The IOT based system allows for a better communication channel between the users and the providers, as the users are able to view their energy consumption in real time, as well as view past usage easily. With the decreasing costs of Internet services and cloud computing, a smart metering system would become a more efficient method for energy providers as well.
              The developed IOT system will be instrumental in removal of repeated manual tasks, thereby allowing more time and resources for solving problems, and in building a more connected and cost-effective metering system.
            </Typography>
            
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              <h3>Features:</h3>
              <ul>
                <li>Eliminates repeated manual task of recording power usage.</li>
                <li> Allows for the granular storage of readings which can be later aggregated and analysed as required.</li>
                <li>Allows users to view readings in real time.</li>
                <li>Allows the representation of data collected in a graphical format.</li>
                <li>Allows for the prediction of future usage.</li>
                <li>Allows the user to turn on/off devices regardless of their location.</li>
              </ul>
            </Typography>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",marginBottom:'1.5vw',paddingLeft:1,paddingRight:1,textAlign:'justify'}}>
              <h3>Tasks Performed:</h3>
              <ul>
                <li>Developed an IOT based smart electricity meter to measure and store electrical usage using Raspberry Pi.</li>
                <li>Developed an Express based server to communicate with the user and perform automated functions to receive and store data from the smart meters, predict future usage etc. Deployed on Google Cloud.</li>
                <li>Developed a React Native based Android app to allow users to access the stored data, view predictions etc.</li>
              </ul>
            </Typography>
            <hr/>
            <Typography variant='h4' sx={{fontSize:{xs:'5vw',md:'1.5vw'},paddingLeft:1}}><b>Note : The project has been dismantled and is no longer available to use. </b></Typography>
            <hr/>
            <div style={{marginTop:30,textAlign:'center'}}>
               <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"2vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>High Level Design</Typography>
              <img src={sm1} style={{maxWidth:'90%',margin:'auto'}}/>
               <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"2vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>Circuit Diagram</Typography>
              <img src={sm2}/>
            </div>
            </Paper>
        </Box>
    </>
  )
}

export default SmartPower