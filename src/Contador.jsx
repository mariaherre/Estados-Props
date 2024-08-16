import React, { useState } from 'react';

function Contador({ usuarios, actualizarUsuario }) {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('');
    const [toggle, setToggle] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0); // Estado para controlar el índice del usuario a actualizar
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleActualizarUsuario = () => {
        // Obtener el usuario actual basado en el índice
        const usuarioActual = usuarios[indiceActual];

        // Crear un nuevo objeto de usuario actualizando los campos deseados
        const usuarioActualizado = {
            ...usuarioActual,
            nombre: nombre !== '' ? nombre : usuarioActual.nombre, // Actualizar solo si se ha ingresado un nuevo nombre
            edad: Math.floor(Math.random() * 50) + 20, 
            profesion: profesion !== '' ? profesion : profesionActual.profesion // Ejemplo de actualización de profesión
        };

        // Actualizar el usuario en la lista de usuarios
        actualizarUsuario(indiceActual, usuarioActualizado);

        // Avanzar al siguiente usuario en la lista
        const siguienteIndice = (indiceActual + 1) % usuarios.length;
        setIndiceActual(siguienteIndice); // Actualizar el índice para la próxima vez

        // Limpiar el campo de nombre después de actualizar
        setNombre('');
    };

    const agregarTarea = () => {
        if (nuevaTarea) {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    return (
        <div className="container">
            <div className="contador-container">
                <h2>Contador: {contador}</h2>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            </div>
            <div>
                <input
                    className="nombre-input"
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <p>Nombre: {nombre}</p>
            </div>
            <div className="toggle-container">
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? 'Ocultar' : 'Mostrar'} Estado
                </button>
                <p>Estado: {toggle ? 'True' : 'False'}</p>
            </div>
            <div className="usuario-container">
                <button className="actualizar-usuario-btn" onClick={handleActualizarUsuario}>
                    Actualizar Usuario
                </button>
                <div className="usuario-info">
                    <p><strong>Usuario:</strong> {usuarios[indiceActual].nombre}</p>
                    <p><strong>Edad:</strong> {usuarios[indiceActual].edad}</p>
                    <p><strong>Profesión:</strong> {usuarios[indiceActual].profesion}</p>
                </div>
            </div>
            <div className="tareas-container">
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button onClick={agregarTarea}>Agregar Tarea</button>
                <ul>
                    {tareas.map((tarea, index) => (
                        <li key={index} onClick={() => eliminarTarea(index)}>
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contador;
