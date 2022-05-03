import { useNavigate } from 'react-router-dom';
import close from '../assets/graphics/close.svg';
import './Nav.css';





function Nav() {

    const navigate = useNavigate();
   

    return (
        <section className='flex nav-container'>

            <div className='flex close-btn-container'>
                <button className='close-btn' onClick={() => navigate(-1)} style={{ backgroundImage: `url(${close})` }} ></button>
            </div>

            <div className='flex menu-btn-container'>              
                
                <button className='menu-btn'onClick={ () => navigate('/menu')}>Meny</button>
                <div className='border'></div>
                <button className='menu-btn' onClick={ () => navigate('/about')}>Vårt kaffe</button>
                <div className='border'></div>            
                <button className='menu-btn' onClick={ () => navigate('/status')} >Orderstatus</button>
                <div className='border'></div>  
            </div>
            

            

        </section>
    )
}

export default Nav;