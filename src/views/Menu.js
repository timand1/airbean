import { useState, useEffect } from "react";
import './Menu.css';
import ProductItems from '../components/ProductItems';
import Header from "../components/Header";

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
            <Header />
            <h1>Meny</h1>
            <article className="products">{productItem}</article>
        </section>
    )
}