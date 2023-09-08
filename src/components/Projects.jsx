import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import smartpower from '../images/sm3.png'
import gallery from '../images/gallery.png'
import gridbox from '../images/gridbox.png'

const Projects = () => {
  return (
    <Paper elevation={10} sx={{padding:'2vw',width:'90%',margin:'auto'}}>
        <Typography variant='h4' sx={{fontSize:{xs:'6vw',lg:'2vw'},paddingLeft:1}}><b>Projects</b></Typography>
        <Typography variant='body1' sx={{fontSize:{lg:'1.25vw'},marginTop:"1.5vw",paddingLeft:1,paddingRight:1,textAlign:'justify'}}>

            Learning through development has been my preferred method of learning. Doing so has greatly increased my knowledge of the languages and intricacies of the libraries that are commonly used.
            Mentioned below are the projects I have built during my academic and post academic time. 

        </Typography>
        <Grid container direction='row'>
            <Grid item xs={12} sm={12} md={12} xl={4}>
                <Card elevation={10} sx={{margin:'5vw'}}>
                    <CardMedia 
                        component='img'
                        height='500'
                        image={smartpower}
                    />
                    <CardContent sx={{borderTop:'3px solid #000'}}>
                        <Typography variant='h4'><b>SmartPower ⚡</b></Typography>
                    </CardContent>
                    <CardActions>
                    <Link to='/smartpower'>
                        <Button sx={{fontSize:{xs:'2vw',md:',.5vw',lg:'1vw'}}}>Learn More</Button>
                    </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={4}>
                <Card elevation={10} sx={{margin:'5vw'}}>
                    <CardMedia 
                        component='img'
                        height='500'
                        image={gridbox}
                    />
                    <CardContent sx={{borderTop:'3px solid #000'}}>
                        <Typography variant='h4'><b>The GridBox 🏎️</b></Typography>
                    </CardContent>
                    <CardActions>
                    <Link to='/gridbox'>
                        <Button sx={{fontSize:{xs:'2vw',md:',.5vw',lg:'1vw'}}}>Learn More</Button>
                    </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={4}>
                <Card elevation={10} sx={{margin:'5vw'}}>
                    <CardMedia 
                        component='img'
                        height='500'
                        image={gallery}
                    />
                    <CardContent sx={{borderTop:'3px solid #000'}}>
                        <Typography variant='h4'><b>The Gallery 📷</b></Typography>
                    </CardContent>
                    <CardActions>
                    <Link to='/gallery'>
                        <Button sx={{fontSize:{xs:'2vw',md:',.5vw',lg:'1vw'}}}>Learn More</Button>
                    </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid> 
    </Paper>
  )
}

export default Projects