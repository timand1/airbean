import './Header.css';
import { useSelector } from 'react-redux';

import { useState } from 'react'
import CartList from "./CartList"

export default function Header() {
    const productList = useSelector(state => state.products);
    const [showCart, setShowCart] = useState(false)

    function displayCart() {
        setShowCart(!showCart)
    }

    const cartList = productList.map((product, index) => <CartList product={product} key={index} />)

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
            {cartList.length > 0 && <section className="cart-list" style={showCart ? { display: 'block' } : { display: 'none' }}  > {cartList} </section>}
        </header>
    )
}