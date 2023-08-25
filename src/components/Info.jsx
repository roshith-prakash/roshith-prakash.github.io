import React from 'react'
import {  Box,
          Typography, 
          Paper,
          TableContainer, 
          Table,
          TableRow,
          TableBody,
          TableCell,} from '@mui/material'

const Info = () => {
  return (
    <Box sx={{
        width:'100%',
        // backgroundColor:'#F8F0E5',
        paddingBottom:'5vw',
        boxSizing:'border-box',
        paddingTop:'5vw'}}>
      
      <Paper elevation={10} sx={{padding:'2vw',width:'90%',margin:'auto'}}>
        <Typography variant='h4' sx={{fontSize:{xs:'6vw',md:'2vw'},paddingLeft:1}}><b>Personal Information</b></Typography>
        <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>

            I consider myself to be a practical person, who focuses on getting tasks completed before the presented deadline. 
            While I do focus on making things work, understanding how they function is something I consider to be important.
            I also am a creative person, indulging in writing - often writing poetry or short stories.
            I particularly enjoy watching Formula 1 - with its appealing data and performance factors.

        </Typography>
        <br></br>
        <TableContainer sx={{padding:'5vw',boxSizing:'border-box'}}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="left" sx={{fontSize:{lg:'1vw'}}}>Name</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Roshith Prakash</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{fontSize:{lg:'1vw'}}}>Date of Birth</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>7th January, 2003</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Age</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Nationality</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Indian</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Address</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Marol, Andheri(E), Mumbai</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Languages</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>English, Hindi, Malayalam, Marathi</TableCell>
              </TableRow>    
              <TableRow>
                <TableCell align="Left" sx={{fontSize:{lg:'1vw'}}}>Hobbies</TableCell>
                <TableCell align="center" sx={{fontSize:{lg:'1vw'}}}>Writing, Video Games, Football, Formula 1</TableCell>
              </TableRow>   
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </Box>
  )
}

export default Info