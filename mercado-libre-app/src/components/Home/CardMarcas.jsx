import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import marcasImage from "../../assets/img/marcas.PNG"

const CardMarcas = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={marcasImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Marcas
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Disfruta de tus marcas favoritas en mercado libres, adidas, nike, reebok y muchas más 
            en nuestra plataforma.
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

export default CardMarcas
