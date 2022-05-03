import './ProductItems.css';
import addButton from '../assets/graphics/add.svg'

import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productAction';

export default function ProductItems(props) {
    const { product, id } = props;

    const dispatch = useDispatch();

    function addToCart() {
        dispatch(addProduct(product))
    }

    return (
        <section id={id} className="menu-item">
            <button style={{ backgroundImage: `url(${addButton})` }} className='add-button' onClick={addToCart}></button>
            <article>
                <p className='product-title'>{product.title}</p>
                <p className='product-desc'>{product.desc}</p>
            </article>
            <p className='product-price'>{product.price} kr</p>
        </section>
    )
}