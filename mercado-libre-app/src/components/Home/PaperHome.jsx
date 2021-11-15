import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const PaperHome = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 250,
                    height: 60,
                },
            }}
        >

            <Paper elevation={3} >
                
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <Box mt={1} ml={1}>
                        <img
                        src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
                          
                        />
                        </Box>
                        </Grid>
                       
                        <Grid item xs={9}>
                        <Box mt={2.5} >
                        <div className="payment-data-title">Tarjeta de crédito</div>
                        </Box>
                        </Grid>

                    </Grid>

                
            </Paper>
            <Paper elevation={3} > 
            <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <Box mt={1} ml={1}>
                        <img
                        src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg"
                          
                        />
                        </Box>
                        </Grid>
                       
                        <Grid item xs={9}>
                        <Box mt={2.5} >
                        <div className="payment-data-title">Tarjeta de débito</div>
                        
                        </Box>
                        </Grid>

                    </Grid>

                </Paper>
                <Paper elevation={3} > 
            <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <Box mt={1} ml={1}>
                        <img
                        src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
                          
                        />
                        </Box>
                        </Grid>
                       
                        <Grid item xs={9}>
                        <Box mt={2.5} >
                        <div className="payment-data-title">Cuotas sin tarjeta</div>
                        </Box>
                        </Grid>

                    </Grid>

                </Paper>
                <Paper elevation={3} > 
            <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <Box mt={1} ml={1}>
                        <img
                        src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
                          
                        />
                        </Box>
                        </Grid>
                       
                        <Grid item xs={9}>
                        <Box mt={2.5} >
                        <div className="payment-data-title">Efectivo</div>
                        </Box>
                        </Grid>

                    </Grid>

                </Paper>
        </Box>
    )
}

export default PaperHome
