import './seccion.css'
import { useState } from "react";
import jim from '../../assets/img/Jim.jpg'
import Boton from '../boton/boton'
import CardB from '../card/card'

function seccion() {
    const [nombre, setNombre] = useState('Jim');
    const [mostrarInformacion, setMostrarInformacion] = useState(false);


    const handleClicEnBoton = () => {
        alert('Hiciste click en el botón');
    }
    const handleClicEnBotonInformacion = () => {
        setMostrarInformacion(!mostrarInformacion);
    }




    return (
        <section className="seccion">
            <div className='juegos'>
                <h2>Earthworm Jim</h2>
                <p>Earthworm Jim es un videojuego de plataformas cuyo protagonista es una Lombriz llamada Jim que, enfundado en un traje cibernético y armado con una pistola, se dedica a recorrer el universo en busca de la princesa "Cuál es su nombre". Earthworm Jim fue creado por Doug TenNapel y diseñado por David Perry.</p>
                <img src={jim} alt="jim" />


                <Boton color="pink" texto="Leer más" onClick={handleClicEnBoton} />
                <Boton className="boton" texto="Comprar" />

                <button onClick={handleClicEnBotonInformacion}>
                    {mostrarInformacion ? 'Ocultar información' : 'Mostrar información'}
                </button>
                {mostrarInformacion && (
                    <div className='informacion-personaje'>
                        <p> Nombre: Jim </p>
                        <p> Juego: Earthworm Jim</p>
                        <p> Especie: Lombriz </p>


                    </div>
                )}
            </div>
        </section>
    )
}

export default seccion