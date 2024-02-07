import axios from 'axios';

export const getProducts = async () => {
 try {
    const response = await axios.get('https://your-api-url.com/products');
    return response.data;
 } catch (error) {
    console.log(error);
    return null;
 }
};