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
        <section id={id} className="flex menu-item">
            
            <div className='flex product-container'>

                <div className='flex'>

                    <div className='flex btn-container'>
                        <button style={{ backgroundImage: `url(${addButton})` }} className='add-button' onClick={addToCart}></button>
                    </div>                   
                                       
                    <div className='flex col'>

                            <div className='flex container-row-1'>
                                <p className='p-title'>{product.title}</p>
                                <p className='p-price'>{product.price}kr</p>
                            </div>

                            <div className='flex container-row-2'>
                                <p className='product-desc'>{product.desc}</p>
                            </div>

                        </div>                      
                    </div>
                </div>



        </section>
    )
}