import React from 'react'
import ToolBar from '../components/ToolBar'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <div>
            <ToolBar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        
                    </Grid>
                </Grid>
                <Button sx={{ m: 2 }} variant="contained">Contained</Button>
                <DeleteIcon color="primary" />

            </Container>
        </div>
      
    )
}

export default Home
