import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({click})=> {
    const cart = useSelector(state => state.cart)
    const {cartItems}  = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2> Juice Bar Shopping Cart</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                    <i className="fas fa-shopping-cart">  </i>
                    <span>Cart
                    {/* <span className="cartlogo_badge">{getCartCount()}</span> */}
                    <span className="cartlogo_badge">0</span>

                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                   Shop
                    </Link>
                </li>
            </ul>
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar