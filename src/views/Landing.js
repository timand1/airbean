import './Landing.css';
import { useNavigate } from 'react-router-dom';

import landing from '../assets/graphics/airbean-landing.svg';

function Landing() {
    const navigate = useNavigate();

    return (
        <section className='landing-section'>
            <img src={landing} alt="AirBean-logo" onClick={ () => navigate('/menu')} />
        </section>
    )
}

export default Landing;