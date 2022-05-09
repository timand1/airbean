import loader from '../assets/graphics/loader.png';
import { useNavigate } from 'react-router-dom';
import '../views/Loading.css';
import { useEffect } from 'react';

function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/status')
        }, 3000);
    }, [])

    return (
        <main className='loading-view'>
            <img src={loader} alt="A steaming cup of coffee" />
            <p>Ett ögonlock, vi förbereder din order..</p>
        </main>
    )
}

export default Loading;