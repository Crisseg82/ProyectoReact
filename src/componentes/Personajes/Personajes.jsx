import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './Personajes.css';


const Personajes = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Cambia la ruta según la ubicación de tu archivo JSON
        fetch('/public/personajes/data.json')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Hubo un problema con la solicitud:', error));
    }, []);
const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <h1>Personajes de Liyue</h1>
            <div className="characters-list">
                {characters.map(character => (
                    <div key={character.id} className="character-card">

                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <p><strong>Nación:</strong> {character.nation}</p>
                        <p><strong>Arma:</strong> {character.weapon}</p>
                        <p><strong>Elemento:</strong> {character.element}</p>
                        <p>{character.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personajes;