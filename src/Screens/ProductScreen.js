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

    useEffect( () => {
        if (product && (match.params.id !== product._id)) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }

    return (
        <div className="productscreen">
            {loading ? ( <h2>Loading...</h2> ): error ? (<h2>{error}</h2> ): (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            {/* Learn alt */}
                            {/* <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=
    rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" /> */}
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
                            <p>Status: <span>{product.conuntInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    {[...Array(product.conuntInStock).keys()].map((x) => (
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