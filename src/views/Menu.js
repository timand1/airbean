import { useState, useEffect } from "react";
import './Menu.css';
import ProductItems from '../components/ProductItems';
export default function Menu() {

    const URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu';

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(`Error : ${err}`))
    }, [])

    const productItem = products.map((product, index) => <ProductItems key={index} id={index} product={product} />)

    return (
        <section>
            <h1>Meny</h1>
            <article className="products">{productItem}</article>
        </section>
    )
}