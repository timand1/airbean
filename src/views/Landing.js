import './Landing.css';
import { useNavigate } from 'react-router-dom';

import landing from '../assets/graphics/airbean-landing.svg';
import graphicsLeft from '../assets/graphics/intro-graphic-left.svg';
import graphicsRight from '../assets/graphics/intro-graphic-right.svg';

function Landing() {
    const navigate = useNavigate();

    return (
        <section className='landing-section' onClick={ () => navigate('/menu')}>
            <img src={graphicsLeft} className="leaves leaves--left" alt="leaves" />
            <img src={landing} className="landing__logo" alt="AirBean-logo"  />
            <img src={graphicsRight} className="leaves leaves--right" alt="leaves" />
        </section>
    )
}

export default Landing;