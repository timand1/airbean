import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <section>
            <h1>404</h1>
            <button className="button" onClick={() => { navigate('/') }}>Take me back</button>
        </section>
    )
}