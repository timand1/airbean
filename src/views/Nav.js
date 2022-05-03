import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import close from '../assets/graphics/close.svg';
import './Nav.css';





function Nav() {

    const navigate = useNavigate();
    const [slide, setSlide] = useState(false)

    function navSlide() {
        setSlide(!slide)
        setTimeout(() => {
            navigate(-1)
        }, 500);
    }

    return (
        <section className={slide ? 'flex nav-container slide-out' : 'flex nav-container'}>
            <div className='flex close-btn-container'>
                <button className='close-btn' onClick={navSlide} style={{ backgroundImage: `url(${close})` }} ></button>
            </div>

            <div className='flex menu-btn-container'>

                <button className='menu-btn' onClick={() => navigate('/menu')}>Meny</button>
                <div className='border'></div>
                <button className='menu-btn' onClick={() => navigate('/about')}>Vårt kaffe</button>
                <div className='border'></div>
                <button className='menu-btn' onClick={() => navigate('/status')} >Orderstatus</button>
                <div className='border'></div>
            </div>
        </section>
    )
}

export default Nav;