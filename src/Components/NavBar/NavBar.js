import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a to="/"><FontAwesomeIcon icon={faHouse} /></a></li>
                <li><a to="/">Home</a></li>
                <li><a to="/">Home</a></li>
            </ul>
        </div>
    );
}

export default NavBar;