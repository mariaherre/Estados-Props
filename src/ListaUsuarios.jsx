import React from 'react';

function TarjetaUsuario({ nombre, edad, profesion }) {
    return (
        <div className="tarjeta-usuario">
            <div>
                <h3>{nombre}</h3>
                <p>Edad: {edad}</p>
                <p>Profesión: {profesion}</p>
            </div>
        </div>
    );
}

function ListaUsuarios({ usuarios }) {
    return (
        <div className="lista-usuarios-container">
            {usuarios.map((usuario, index) => (
                <TarjetaUsuario
                    key={index}
                    nombre={usuario.nombre}
                    edad={usuario.edad}
                    profesion={usuario.profesion}
                />
            ))}
        </div>
    );
}

export default ListaUsuarios;
