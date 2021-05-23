import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://animechan.vercel.app/api'
});

export default clienteAxios;