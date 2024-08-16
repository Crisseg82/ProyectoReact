import React, { useEffect, useState } from 'react';
import './Personajes.css';

const Personajes = () => {
    const [characters, setCharacters] = useState([]);
    const [visibleCharacterId, setVisibleCharacterId] = useState(null);

    useEffect(() => {
        fetch('/public/personajes/data.json')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Hubo un problema con la solicitud:', error));
    }, []);


    const handleShowDetails = (id) => {
        setVisibleCharacterId(visibleCharacterId === id ? null : id);
    };

    return (
        <div id='container-personajes'>
            <h1>Personajes</h1>

            <div className="characters-list">
                
                {characters.map(character => (
                    
                    <div key={character.id} className="character-card">
                        <img src={character.image} alt={character.name} />

                        <div className='descripcionp'>
                            <strong>{character.name}</strong>
                            <hr />
                            <p>{character.description}</p>

                       <button onClick={() => handleShowDetails(character.id)}>
                            {visibleCharacterId === character.id ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                        </button> 

                        </div>

                        

                        {visibleCharacterId === character.id && (
                            
                            <div className="character-details">
                                <p><strong>Nación:</strong> {character.nation}</p>
                                <p><strong>Arma:</strong> {character.weapon}</p>
                                <p><strong>Elemento:</strong> {character.element}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personajes;
