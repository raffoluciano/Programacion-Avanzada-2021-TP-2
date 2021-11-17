import React, { useEffect, useState } from 'react'
import { getListArticulos } from '../../services/ArticulosServices'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';



const imgStyle = {
  height: '200px',
  width: '200px'
}

const ListArticulos = ({ searchvalue }) => {
  const [articulos, setArticulos] = useState([])

  useEffect(function () {
    getListArticulos(searchvalue, 10).then(articulos => setArticulos(articulos))
  }, [searchvalue])

  return (
    <div>
      {articulos.length != 0 &&

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            console.log('ver', articulos),
            articulos.map((articulo, index) => {
              return <React.Fragment key={index}>
              
                <Link to={`/details/${articulo.id}`}  style={{ textDecoration: 'none' }}>
                <ListItem alignItems="flex-start" >
                  <ListItemAvatar>
                    <img
                      style={imgStyle}
                      src={articulo.thumbnail}
                      //alt={item.title}
                      loading="lazy"
                      className="photo"
                    />
                  </ListItemAvatar>
                  <ListItemText

                    primary= {<Typography> $ {articulo.price} </Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                         {articulo.title} 
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                </Link>
                
     
                <Divider variant="inset" component="li" />
              </React.Fragment>
            })
          }
        </List>       
      }
    </div>
  )
}

export default ListArticulos
