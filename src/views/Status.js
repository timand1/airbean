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
        <section>
            <p className="">Ordernummer <span>#{orderNumber}</span></p>
            <img src={logo} alt="img" />
            <h2>Din beställning är på väg</h2>
            <h3>{eta} minuter</h3>
            <button className='btn--light'>Ok, cool!</button>
        </section>
    )
}

export default Status;