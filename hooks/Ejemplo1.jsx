import React, { useEffect, useState } from 'react'
/*import ‘../../styles/clock.scss’;*/

const Clock = () => {
    const defaultState ={
        fecha: new Date(),
        edad: 0,
        nombre: 'Lorena',
        apellidos: 'Chamorro',
        };

    const [user, setUser] = useState (defaultState)

    useEffect(() => {
        const intervalAge = setInterval(() => {
        tick();
        }, 1000);
        return () => {
        clearInterval(intervalAge);
        };
    });

    const tick = () => {
        return setUser({
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos,
    });
};
    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>
            {user.nombre} {user.apellidos}
            </h3>
            <h1>
            Edad: {user.edad}
            </h1>
        </div>
        );
    };


export default Clock;
