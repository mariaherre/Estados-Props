import React, { useState } from 'react';
import Contador from './Contador';
import ListaUsuarios from './ListaUsuarios';
import './App.css';

function App() {
    // Estado para la lista de usuarios
    const [usuarios, setUsuarios] = useState([
        { nombre: 'Juan Pérez', edad: 30, profesion: 'Ingeniero' },
        { nombre: 'Ana García', edad: 25, profesion: 'Diseñadora' },
        { nombre: 'Luis Rodríguez', edad: 35, profesion: 'Profesor' }
    ]);

    // Función para actualizar un usuario en la lista
    const actualizarUsuario = (index, nuevoUsuario) => {
        const nuevosUsuarios = [...usuarios];
        nuevosUsuarios[index] = nuevoUsuario;
        setUsuarios(nuevosUsuarios);
    };

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ListaUsuarios usuarios={usuarios} />
            <h2>Contador y Otras Funcionalidades</h2>
            <Contador usuarios={usuarios} actualizarUsuario={actualizarUsuario} />
        </div>
    );
}

export default App;
