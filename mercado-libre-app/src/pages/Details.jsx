import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getArticulosById } from '../services/ArticulosServices'
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';


const Details = () => {

    const imgStyle = {
        height: '250px',
        width: '300px'
    }

    const { id } = useParams()

    const [articulo, setArticulo] = useState([])

    useEffect(function () {
        getArticulosById(id).then(articulo => setArticulo(articulo))
    }, [])

    const theme = useTheme();

    console.log(id)
    console.log('articulo', articulo)
    return (
        <div>
            {articulo.length != 0 && <Container style={{ height: "100vh" }}>
                <Box pt={2}>
                    <Card sx={{ display: 'flex' }}>
                        <Box pl={2}>
                            {/* <CardMedia
        component="img"
        style={imgStyle}
        
        image={articulo.pictures[0].secure_url}
        alt="Live from space album cover"
      /> */}
                            <img
                                style={imgStyle}
                                src={articulo.pictures[0].secure_url}
                                //alt={item.title}
                                loading="lazy"
                                className="photo"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {articulo.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`$ ${articulo.price}`}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`Cantidad disponible: ${articulo.available_quantity}`}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`Localidad vendedor: ${articulo.seller_address.city.name} ${articulo.seller_address.state.name}`}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`Condicion: ${articulo.condition == 'new' ? 'Nuevo' : 'Usado'}`}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`Garantia: ${articulo.warranty}`}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {`Acepta mercado pago: ${articulo.accepts_mercadopago ? 'Si' : 'No'}`}
                                </Typography>


                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button size="small">Cancelar</Button>
                                </Link>
                                <Box ml={1}>
                                    <Button variant="contained" target="_blank" href={articulo.permalink} size="small">Mas informacion</Button>
                                </Box>


                                <Box ml={1}>
                                    <Button color="success" variant="contained" size="small">Comprar</Button>
                                </Box>

                            </CardActions>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
                        </Box>

                    </Card>
                </Box>

            </Container>}
        </div>


    )
}

export default Details
