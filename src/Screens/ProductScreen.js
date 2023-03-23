import './ProductScreen.css'
// Value of brackets
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
// import { getProductDetails as getDetailsOfProducts} from '../redux/actions/productActions'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

const ProductScreen = ({ match, history }) => {

    console.log('test');
    const [qty, setQty ] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product } = productDetails;

    console.log('product: ', product);
    console.log('product details: ', productDetails);

    // match params is the id in the url 
    // useEffect( () => {
    //     console.log('match params ', match.params)
    //     console.log('history', history)
    //     if (product && (match.params.id !== product._id)) {
    //         dispatch(getProductDetails(match.params.id))
    //         // dispatch(getProductDetails(product._id))
    //     }
    // }, [
    //     dispatch,
    //      product,
    //       match])

    const addToCartHandler = () => {
        console.log('product id', product._id)
        console.log('qty ', qty)
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }

    return (
        <div className="productscreen">
            {loading ? ( <h2>Loading...</h2> ): error ? (<h2>{error}</h2> ): (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
    <img src={product.imageUrl} alt="product name" />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Description: ${product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>Price: <span>${product.price}</span></p>
                            <p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x+1} value={x+1} >
                                             {x+1} 
                                             </option>
                                    )
                                    )}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ProductScreen