import React, { useState } from 'react';

const loggedStyle = { 
    color: 'white'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = () => {
    const [logged, setlogged] = useState(false)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        <p> Hola, Lorena </p>
    {/* <p> Hola, {props.name} </p>*/}
        <button onClick={()=> {
            console.log('Boton pulsado');
            setlogged(!logged);
        }}>
            { logged ? 'Logout' : 'Login'}
        </button>
        </div>
    );
}

export default GreetingStyled;
