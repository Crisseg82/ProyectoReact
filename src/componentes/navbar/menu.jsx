import { Link } from 'react-router-dom'
import "./menu.css"

const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li> <Link to="/" > Inicio </Link> </li>
                <li> <Link to="/Juegos" > Juegos </Link> </li>
                <li> <Link to="/Garantia" > Garantia </Link> </li>
                <li> <Link to="/Ubicacion" > Ubicacion </Link> </li>
            </ul>
        </nav>
    )
}

export default Menu;