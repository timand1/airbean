import './ErrorPage.css';
import headerGraphic from '../assets/graphics/graphics-header.svg';
import footerGraphic from '../assets/graphics/graphics-footer.svg';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <section className='error-page'>
            <img src={headerGraphic} alt="leaves" className="graphics graphics-header" />
            <h1>Hey</h1>
            <p>You wont find any coffee here</p>
            <p>We're sorry</p>
            <p>Sincerely, Mighty Gardeners</p>
            <button className="error-button" onClick={() => { navigate('/') }}>Take me back</button>
            <img src={footerGraphic} alt="leaves" className="graphics graphics-footer" />
        </section>
    )
}