import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CuotaMetodoPagoImage from "../../assets/img/cuotas.jpg"

const CardMetodoPago = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={CuotaMetodoPagoImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cuotas sin interes
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Paga en cuotas sin interés con tus tarjetas de crédito ·
             Ahora 30, 24, 18 y 12 · ¡En hasta 6 cuotas sin interés en todo el sitio
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ir
          </Button>
        </CardActions>
      </Card>
    )
}

export default CardMetodoPago
