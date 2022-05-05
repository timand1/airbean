import './Status.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/graphics/drone.svg';

import { emptyCart } from '../redux/actions/productAction';

function Status(props) {
    const {setOrderConfirmed, orderConfirmed} = props;
    const [orderNumber, setOrderNumber] = useState();
    const [eta, setEta] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const data = async () => {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order')
            const data = await response.json();
            setOrderNumber(data.orderNr)
            setEta(data.eta)
        }
        return (data)
    }, []);

    function handleClick() {
        navigate('/menu');
        dispatch(emptyCart());
        setOrderConfirmed(false);
    }

    return (
        <article>
            {orderConfirmed &&
                <section className='status'>
                    <p className="status__orderNr">Ordernummer <span>#{orderNumber}</span></p>
                    <img className='status__img sent' src={logo} alt="img" />
                    <h2 className='status__heading'>Din beställning är på väg!</h2>
                    <h3 className='status__eta'><span>{eta}</span> minuter</h3>
                    <button className='btn btn--light' onClick={handleClick}>Ok, cool!</button>
                </section>}
            {!orderConfirmed &&
                <section className='status'>
                    <p className="status__orderNr"></p>
                    <img className='status__img' src={logo} alt="img" />
                    <h2 className='status__heading'>Ooops, här var det tomt</h2>
                    <button className='btn btn--light' onClick={() => {navigate('/menu')}}> Give me coffeeee!</button>
                </section>}
        </article>
    )
}

export default Status;