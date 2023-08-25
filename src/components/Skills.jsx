import React from 'react'
import {  Box,
          Typography, 
          Paper, 
          TableContainer, 
          Table,
          TableRow,
          TableBody,
          TableCell} from '@mui/material'

const Skills = () => {
  return (
        <Box component="div" 
              sx={{
                width:'100%',
                // backgroundColor:'#EADBC8',
                paddingBottom:'5vw',
                boxSizing:'border-box',
                paddingTop:'5vw'
              }}
        >
          <Paper elevation={10} sx={{padding:'2vw',width:'90%',margin:'auto'}}>
            <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>Skills</b></Typography>
            <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>

              As a Full Stack developer, I have learnt various languages and frameworks in order to create fully fledged web and mobile applications.
              I have preferred using the MERN Stack for development as it allows to develop both Front-Ends and Back-Ends seamlessly, with the help of only JavaScript.
              By using React along with HTML & CSS, I have been able to use a component based architecture in order to develop applications. 
              This, when combined with APIs from the Express web server, allow us to present our data with minimal effort and complexity. 

            </Typography>
            <TableContainer sx={{padding:'2vw',boxSizing:'border-box'}}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="left" sx={{fontSize:{lg:'1vw'}}}>Front End Languages</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>HTML, CSS, JavaScript</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" sx={{fontSize:{lg:'1vw'}}}>Front End FrameWorks</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>React, React Native, Next JS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Libraries</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Material UI, Redux, React-Storybook, React Query</TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Back End Languages</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Node Js</TableCell>
                  </TableRow>    
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Back End Framework</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Express JS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Databases</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>SQL (MySql), MongoDB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Version Control</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Git, GitHub</TableCell>
                  </TableRow>   
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Additional Languages</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Basic Python, Basic TypeScript</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Operating Systems</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Windows, Linux</TableCell>
                  </TableRow>   
                  <TableRow>
                    <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Other Skills</TableCell>
                    <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>TeamWork, Communication, Basic Networking</TableCell>
                  </TableRow> 
                </TableBody>
                
              </Table>
            </TableContainer>
          </Paper>
                

        </Box>
  )
}

export default Skills