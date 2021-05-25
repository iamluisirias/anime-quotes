import React from 'react';
import Frase from './Frase';
import { motion } from 'framer-motion';

const Card = ({ data, obtenerFrase, cambiarColor, color }) => {

    const { hashtag, character, quote } = data;

    const variants = {
        start: { scale: 0.6 },
        finish: { scale: 1 }
    }

    const manejarCambios = () => {
        obtenerFrase();
        cambiarColor();
    }

    let cardColor = 'bg-light'

    if (color === 'light') {
        cardColor = 'bg-dark'
    }

    return (
        <motion.div 
            className={`card mw-100 text-end ${cardColor}`} 
            id="quote-box"
            initial="start"
            animate="finish"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="card-body">
                <div className={`card-text text-start text-${color}`} name="text" id="text">
                    <Frase data={data}/>
                </div>
                <div className="d-flex justify-content-between">
                    <a 
                        href={`http://twitter.com/intent/tweet?hashtags=quote,${hashtag}&related=lufexib&text="${quote}" - ${character}`}
                        target="_blank" 
                        title="Tweet this quote!"
                        rel="noreferrer"
                        id="tweet-quote"
                        className="fs-3"
                        type="submit"
                        
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={`bi bi-twitter text-${color}`} viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                    <button 
                        className={`btn btn-sm btn-${color}`} 
                        name="new-quote"
                        id="new-quote"
                        onClick={manejarCambios}
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;