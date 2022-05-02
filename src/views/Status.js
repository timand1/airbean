import './Status.css'
import { useEffect, useState } from 'react';
import logo from '../assets/graphics/drone.svg'

function Status () {
    const [orderNumber, setOrderNumber] = useState();
    const [eta, setEta] = useState();

    useEffect( ()=> {
        const data = async () => {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order')
            const data = await response.json();
            setOrderNumber(data.orderNr)
            setEta(data.eta)
        }
        return(data)
    }, [])
    
    return (
        <section className='status'>
            <p className="status__orderNr">Ordernummer <span>#{orderNumber}</span></p>
            <img className='status__img' src={logo} alt="img" />
            <h2 className='status__heading'>Din beställning är på väg!</h2>
            <h3 className='status__eta'><span>{eta}</span> minuter</h3>
            <button className='btn btn--light'>Ok, cool!</button>
        </section>
    )
}

export default Status;