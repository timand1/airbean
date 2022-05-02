import './Header.css';
import { useSelector } from 'react-redux';

import { useState } from 'react'
import CartList from "./CartList"

export default function Header() {
    const productList = useSelector(state => state.products);
    const totalCost = useSelector(state => state.totalCost);
    const [showCart, setShowCart] = useState(false)

    function displayCart() {
        setShowCart(!showCart)
    }
    const uniqueCart = [...new Set(productList)]
    const cartList = uniqueCart.map((product, index) => <CartList product={product} key={index} id={product.id} />)
    return (
        <header className='nav'>
            <div className='nav-btn'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <button className='cart' onClick={(displayCart)}>
                <span className="material-symbols-outlined">
                    lock
                </span>
                <p className="cart-counter">{productList.length}</p>
            </button>
            <article>
                {cartList.length > 0 && <section className="cart-list" style={showCart ? { display: 'block' } : { display: 'none' }}  > {cartList}
                    <h2>Total {totalCost}</h2>
                </section>}
            </article>
        </header>
    )
}