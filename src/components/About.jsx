import React from 'react'
import "@fontsource/open-sans";
import "@fontsource/anek-malayalam"
import Roshith1 from "./roshith1.jpg"
import    { Box, 
            Typography,
            Stack, 
            Paper,
            Button} from '@mui/material'

const About = () => {

  return (
        <Box component="div" 
              sx={{
                height:'70%',
                width:'100%',
                // backgroundColor:'#DAC0A3',
                opacity:0.9,
                paddingTop:'7vw',
                paddingBottom:'2vw',
                boxSizing:'border-box'
              }}>
            <Stack direction='row' height='100%'>
                <Stack item sx={{width:'30%',padding:'2%',paddingLeft:'5%',margin:'auto',boxSizing:'border-box'}}>
                    <img alt="Roshith Prakash" src={Roshith1} style={{width: '70%',marginBottom:5,border:'1vw solid #fff',borderRadius:'50%' }}/>
                    <Typography variant='h3' color='#000' sx={{marginTop:'8%',fontFamily:'Anek Malayalam',fontSize:{xs:'6vw',md:'4vw'}, paddingLeft:{md:3}}}>
                        <b>Roshith</b>
                    </Typography>
                    <Typography variant='h3' color='#000' sx={{fontFamily:'Anek Malayalam',fontSize:{xs:'6vw',md:'4vw'}, paddingLeft:{md:3} }}>
                        <b>Prakash</b>
                    </Typography>
                </Stack>

                <Stack width='70%' height='100%'>
                    <Paper elevation={10} sx={{
                        height:'100%',
                        width:'80%',
                        padding:'5%',
                        marginTop:'2%' ,
                        marginBottom:'2%'
                    }}>  
                        <Typography variant="h3" sx={{color:'#000',fontFamily:"Anek Malayalam",marginBottom:'2vw',fontSize:{xs:"4vw",md:"3vw"}}}>About me</Typography>
                        <Typography variant='h5' color='#000' sx={{textAlign:'justify',fontFamily:'Anek Malayalam',fontSize:{xs:'3vw',md:'2vw'}}}>
                            Hi, I am <b>Roshith Prakash</b> - an avid learner and developer, learning the ways of FullStack development using Javascript. 
                            I use the <b>MERN (Mongo, Express, React, NodeJS) </b>Stack to learn and to develop exciting web apps.
                            <br/> Seeking a position in an organization where skills and abilities can be creatively utilized to
                            add value to attain professional growth while being competent and resourceful.
                        </Typography>
                        <Box sx={{marginTop:'2vw'}}>
                            <Button sx={{marginRight:'1vw'}} onClick={()=>window.open("mailto:roshithprakash07@gmail.com")}>
                                 <Typography variant='h6' sx={{fontSize:{xs:'3vw',md:'1.5vw'}}}>Contact Me</Typography>
                            </Button>
                            <Button onClick={()=>window.open("https://www.linkedin.com/in/roshith-prakash")}>
                                <Typography variant='h6' sx={{fontSize:{xs:'3vw',md:'1.5vw'}}}>LinkedIn</Typography>
                            </Button>
                        </Box>
                        

                    </Paper>
                </Stack>

            </Stack>

        </Box>


  )
}

export default About