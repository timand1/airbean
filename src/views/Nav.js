import { useNavigate } from 'react-router-dom';
import close from '../assets/graphics/close.svg';
import './Nav.css';





function Nav() {

    const navigate = useNavigate();
   

    return (
        <section className='nav'>
            <button className='close-btn' onClick={() => navigate(-1)} style={{ backgroundImage: `url(${close})` }} ></button>
            

            <button>Meny</button>
            
            
            <button>Vårt kaffe</button>
            
            <button>Orderstatus</button>

        </section>
    )
}

export default Nav;