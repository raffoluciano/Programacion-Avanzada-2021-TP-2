import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import blackFridayImage from "../../assets/img/black-friday.jpg"

const CardOfertas = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={blackFridayImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ofertas
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Disfruta de las mejores Ofertas del Black Friday 2021 en Tecnología,
             Moda, Electrodomésticos y mucho más en Mercado Libres
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

export default CardOfertas
