import React from 'react';

const Frase = ({ data }) => {

    //Destructuring
    const { anime, character, quote } = data;

    return (
        <blockquote className="blockquote mb-1 p-4">
           <p>{quote}</p>
           <footer className="blockquote-footer text-end"><p>{character} from <cite>{anime}</cite></p></footer>
        </blockquote>
    );
};

export default Frase;