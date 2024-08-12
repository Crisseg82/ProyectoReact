import { Link } from 'react-router-dom'
import "./menu.css"

const Menu = () => {
    return(
        <nav className='menu'>
            <ul>
                <li> <Link to="/" > Inicio </Link> </li>
                <li> <Link to="/Personajes" > Personajes </Link> </li>
                <li> <Link to="/Nacion" > Nacion </Link> </li>
                <li> <Link to="/Elementos" > Elementos </Link> </li>
            </ul>
        </nav>
    )
}

export default Menu;