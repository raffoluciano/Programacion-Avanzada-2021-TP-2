import axios from 'axios';

const apiUrl = "https://api.mercadolibre.com";


export const getListArticulos = async(query,limit) => {
    var result = await axios.get(`${apiUrl}/sites/MLA/search?q=${query}/&limit=${limit}#json`)
    console.log('resut',result.data.results)
    return  result.data.results
    
}

export const getArticulosById = async(id) => {
    var result = await axios.get(`${apiUrl}/items/${id}`)
    return result.data
}