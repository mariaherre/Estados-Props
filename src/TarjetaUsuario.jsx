import React from 'react';

function TarjetaUsuario({ nombre, edad, profesion }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Profesión: {profesion}</p>
        </div>
    );
}

export default TarjetaUsuario;
