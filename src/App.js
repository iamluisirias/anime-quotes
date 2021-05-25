import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Spinner from './components/Spinner';
import clienteAxios from './config/axios';
import { motion } from 'framer-motion';

const App = () => {

    //State para almacenar los datos de respuesta de la API.
    const [ data, setData ] = useState({
      anime: '',
      quote: '',
      character: '',
      hashtag: ''
    });

    //State para cambiar dinamicamente el color de fondo
    const [ color, setColor ] = useState('primary');

    //State para comprobar si aun esta cargando el componente
    const [ loading, setLoading ] = useState(false);

    //Funcion para obtener una frase random de la pai de animechan.
    const obtenerFrase = async () => {
      try {
        setLoading(true)
        const respuesta = await clienteAxios.get('/random');
        setData({
          anime: respuesta.data.anime,
          quote: respuesta.data.quote,
          character: respuesta.data.character,
          hashtag: respuesta.data.anime.replace(/ /g, '')
        });
        setLoading(false)
      
      } catch (error) {
        console.log(error);
      }
    }

    //Funcion para cambiar el color del bg.
    const cambiarColor = () => {
      const colores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

      setColor(colores[Math.floor(Math.random() * 8)])

    }
    
    useEffect(() => {
      obtenerFrase();
    }, [])

    const variants = {
      start: { color: color },
      finish: { color: color }
    }

  return(
    <motion.main 
      className={`container-fluid bg-${color} vw-100 vh-100 d-flex flex-column align-items-center justify-content-center`}
      initial="start"
      animate="finish"
      variants={variants}
    >
      <div className="w-75">
        {
          loading ? ( <Spinner/> ) : ( <Card data={data} obtenerFrase={obtenerFrase} cambiarColor={cambiarColor} color={color}/> )
        } 
      </div>
    </motion.main>
  )
}

export default App;
