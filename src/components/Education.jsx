import React from 'react'
import {  Box,
          Typography, 
          Paper, 
          TableContainer, 
          Table,
          TableRow,
          TableBody,
          TableCell} from '@mui/material'

const Education = () => {
  return (
    <Box sx={{
        width:'100%',
        // backgroundColor:'#e1d9ca',
        paddingBottom:'5vw',
        boxSizing:'border-box',
        paddingTop:'5vw'}}>
      
      <Paper elevation={10} sx={{padding:'2vw',width:'90%',margin:'auto'}}>
        <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>Education</b></Typography>
        <br></br>
        <TableContainer sx={{padding:'5vw',boxSizing:'border-box'}}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="left" sx={{fontSize:{lg:'1vw'},padding:'1.5vw',paddingTop:'-1vw'}}>
                  <Typography variant='h3' sx={{fontSize:{xs:'3vw',lg:'2vw'}}}>BSc.(I.T.) | Bhavans College (Autonomous), Mumbai</Typography>
                  <Typography variant='h5' sx={{fontSize:{xs:'2vw',lg:'1.5vw'},marginTop:'0.8vw'}}>Grade : A+ | CGPA : 9.78 out of 10</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontSize:{lg:'1vw'},padding:'1.5vw'}}>
                  <Typography variant='h3' sx={{fontSize:{xs:'3vw',lg:'2vw'}}}>HSC (Science + IT) | Bhavans College, Mumbai</Typography>
                  <Typography variant='h5' sx={{fontSize:{xs:'2vw',lg:'1.5vw'},marginTop:'0.8vw'}}>Completed with 77%</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontSize:{lg:'1vw'},padding:'1.5vw'}}>
                  <Typography variant='h3' sx={{fontSize:{xs:'3vw',lg:'2vw'}}}>SSC | Marol Education Academy's High School, Mumbai</Typography>
                  <Typography variant='h5' sx={{fontSize:{xs:'2vw',lg:'1.5vw'},marginTop:'0.8vw'}}>Completed with 92%</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>
  )
}

export default Education