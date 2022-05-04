import { useState, useEffect } from "react";
import './Menu.css';
import ProductItems from '../components/ProductItems';
import Header from "../components/Header";
import headerGraphic from '../assets/graphics/graphics-header.svg';
import footerGraphic from '../assets/graphics/graphics-footer.svg';

export default function Menu(props) {
    const { showCartButton, setShowCartButton } = props
    useEffect(() => {
        setShowCartButton(true)
    }, [])

    const URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(`Error : ${err}`))
    }, []);

    const productItem = products.map((product, index) => <ProductItems key={index} id={index} product={product} />);

    return (
        <section className="menu">
            <img src={headerGraphic} alt="leaves" className="graphics graphics-header" />
            <Header showCartButton={showCartButton} />
            <h1 className="menu-headline">Meny</h1>
            <article className="products">{productItem}</article>
            <article className="menu-combo">
                <h2>Göteborg 400 år <span className="italic">ish</span></h2>
                <p>Brygkaffe & Gustav Adolfsbakelse combo</p>
                <h3>40 kr</h3>
            </article>
            <img src={footerGraphic} alt="leaves" className="graphics graphics-footer" />
        </section>
    )
}