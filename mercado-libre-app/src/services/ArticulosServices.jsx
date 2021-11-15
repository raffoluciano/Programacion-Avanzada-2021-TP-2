import axios from 'axios';

const apiUrl = "https://api.mercadolibre.com/sites/MLA";

export const getListArticulos = async(query,limit) => {
    var result = axios.get(`${apiUrl}/search?q=${query}/&limit=${limit}#json`)
    console.log('resut',result)
    return await result
    
}
