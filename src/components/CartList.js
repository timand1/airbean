import './CartList.css'

import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../redux/actions/productAction';

import downArrow from '../assets/graphics/arrow-down.svg';
import upArrow from '../assets/graphics/arrow-up.svg';

export default function CartList(props) {
    const { product, id, checkDiscount } = props;
    const productList = useSelector(state => state.products);
    const dispatch = useDispatch();

    const uniqueProduct = productList.filter(product => product.id === id);
    let amount = uniqueProduct.length;

    function removeCart() {
        dispatch(removeProduct(product))
        checkDiscount();
    }

    function addCart() {
        dispatch(addProduct(product))
        checkDiscount();
    }

    return (
        <section id={product.id} className='cart-item' >
            <article>
                <p className='cart-title'>{product.title}</p>
                <p className='cart-price'>{product.price * amount} kr</p>
            </article>
            <div className='dots'></div>
            <article className='cart-amount'>
                <button className='cart-button' style={{ backgroundImage: `url(${upArrow})` }} onClick={addCart}></button>
                <p>{amount}</p>
                <button className='cart-button' style={{ backgroundImage: `url(${downArrow})` }} onClick={removeCart} ></button>
            </article>
        </section>
    )
}