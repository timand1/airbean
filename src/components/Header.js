import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { addDiscount } from '../redux/actions/productAction';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from "./CartList";

import navButton from '../assets/graphics/navicon.svg';
import cartIcon from '../assets/graphics/bag.svg';

export default function Header(props) {
    const { showCartButton, setOrderConfirmed } = props;
    const productList = useSelector(state => state.products);
    const totalCost = useSelector(state => state.totalCost);
    const totalDiscount = useSelector(state => state.discount);

    const navigate = useNavigate();

    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();

    function displayCart() {
        setShowCart(!showCart)
    }

    function confirmOrder() {
        setOrderConfirmed(true);
        navigate('/loading');
    }

    useEffect(() => {
        checkDiscount();

        if (productList.length === 0) {
            setShowCart(false)
        };
    }, [productList])

    function checkDiscount() {
        const gustavAmount = productList.filter(product => product.title === 'Gustav Adolfsbakelse');
        const bryggAmount = productList.filter(product => product.title === 'Bryggkaffe');

        // Determines amount of discount depending on the lenght of the lowest product
        if (bryggAmount.length > 0 && gustavAmount.length > 0) {
            if (bryggAmount > gustavAmount) {
                dispatch(addDiscount(gustavAmount.length));
            } else {
                dispatch(addDiscount(bryggAmount.length));
            }
        } else {
            dispatch(addDiscount(0));
        }
    }

    // Returns a unique array with only 1 of each value
    const uniqueCart = [...new Map(productList.map((cartItem) => [cartItem['id'], cartItem])).values(),];

    const cartList = uniqueCart.map((product, index) => <CartList product={product} key={index} id={product.id} checkDiscount={checkDiscount} />);

    return (
        <header className='nav'>
            <div className='nav-btn ' onClick={() => navigate('/nav')} style={{ backgroundImage: `url(${navButton})` }}>
            </div>
            {showCartButton &&
                <button className='cart' onClick={(displayCart)}>
                    <img src={cartIcon} alt="leaves" className="cart-icon" />
                    {productList.length > 0 &&
                        <p className="cart-counter">{productList.length}</p>}
                </button>}
            {cartList.length > 0 &&
                <section className='cart-list' style={showCart ? { display: 'flex' } : { display: 'none' }}  >
                    <h2 className='cart-headline'>Din Best??llning</h2>
                    <article className="cart-items">{cartList}</article>
                    <article className="cart-price">
                        <div className="flex">
                            <h2>Total</h2>
                            <div className='dots dots__total'></div>
                            <h2>{totalCost - totalDiscount} kr</h2>
                        </div>
                        {totalDiscount > 0 ? <div className='cart-discount'> <p className="cart-items">Rabatt {totalDiscount} kr</p></div> : ''}
                        <p>inkl moms + dr??narleverans</p>
                    </article>
                    <button className='button button-cart' onClick={confirmOrder}>Take my money!</button>
                </section>}
            {cartList.length > 0 &&
                <section className='cart-overlay' onClick={(displayCart)} style={showCart ? { display: 'block' } : { display: 'none' }}  >
                </section>}

        </header>
    )
}