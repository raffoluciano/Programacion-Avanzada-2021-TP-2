import axios from 'axios';

const apiUrl = "https://api.mercadolibre.com/sites/MLA";

export const getListArticulos = async(query,limit) => {
    var result = await axios.get(`${apiUrl}/search?q=${query}/&limit=${limit}#json`)
    console.log('resut',result.data.results)
    return  result.data.results
    
}
