import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, addDiscount } from '../redux/actions/productAction';

export default function CartList(props) {
    const { product, id } = props;
    const productList = useSelector(state => state.products);

    const dispatch = useDispatch();

    const uniqueProduct = productList.filter(product => product.id === id);
    let amount = uniqueProduct.length;

    let discountAmount = 0;

    if (productList.find(product => product.title === 'Bryggkaffe') && productList.find(product => product.title === 'Gustav Adolfsbakelse')) {
        discountAmount = discountAmount + 1
        // dispatch(addDiscount(discountAmount))
        console.log(discountAmount)
    }

    function removeCart() {
        dispatch(removeProduct(product))
    }

    function addCart() {
        dispatch(addProduct(product))
    }

    return (
        <section id={product.id} >
            <p>{product.title}</p>
            <p>{product.price * amount} kr</p>
            <p>{amount}</p>
            <button onClick={addCart}>ADD</button>
            <button onClick={removeCart} >REMOVE</button>
        </section>
    )
}