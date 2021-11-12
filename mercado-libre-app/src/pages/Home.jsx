import React from 'react'
import ToolBar from '../components/ToolBar'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import CardOfertas from '../components/Home/CardOfertas';
import Box from '@mui/material/Box';
import CardMetodoPago from '../components/Home/CardMetodoPago';
import CardMarcas from '../components/Home/CardMarcas';
import PaperHome from '../components/Home/PaperHome';



const Home = () => {
    return (
        <div>
            <ToolBar />
            <Container>
                
                <Grid  container spacing={2}>
                    <Grid item xs={4}>
                        <Box mt={2}>
                        <CardOfertas  />
                        </Box>                
                    </Grid>
                    <Grid item xs={4}>
                        <Box mt={2}>
                        <CardMetodoPago />
                        </Box>                
                    </Grid>
                    <Grid item xs={4}>
                        <Box mt={2}>
                        <CardMarcas />
                        </Box>                
                    </Grid>
                </Grid>

                <Grid  container spacing={2}>
                <Grid item xs={12}>
                        <Box mt={2} ml={4}>
                        <PaperHome />
                        </Box>                
                    </Grid>
                  
                </Grid>
            </Container>
        </div>
      
    )
}

export default Home
