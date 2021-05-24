import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import clienteAxios from './config/axios';

const App = () => {

    //State para almacenar los datos de respuesta de la API.
    const [ data, setData ] = useState({
      anime: '',
      quote: '',
      character: '',
      hashtag: ''
    });

    //Funcion para obtener una fras random de la pai de animechan.
    const obtenerFrase = async () => {
      try {
        const respuesta = await clienteAxios.get('/random');
        setData({
          anime: respuesta.data.anime,
          quote: respuesta.data.quote,
          character: respuesta.data.character,
          hashtag: respuesta.data.anime.replace(/ /g, '')
        });

      
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
      obtenerFrase();
    }, [])

  return(
    <main className="container-fluid bg-primary vw-100 vh-100 d-flex flex-column align-items-center justify-content-center">
     <Card data={data} obtenerFrase={obtenerFrase}/>
    </main>
  )
}

export default App;
