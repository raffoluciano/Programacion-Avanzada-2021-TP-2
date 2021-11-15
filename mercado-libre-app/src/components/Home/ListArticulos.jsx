import React, { useEffect,useState } from 'react'
import { getListArticulos } from '../../services/ArticulosServices'



const ListArticulos = ({searchvalue}) => {
    const [articulos,setArticulos] = useState([])

    useEffect(function () {
        getListArticulos('pokemon', 1).then(articulos => setArticulos(articulos))
    }, [])

    return (
        <div>
            <h1>{articulos.site_id}</h1>
        </div>
    )
}

export default ListArticulos
