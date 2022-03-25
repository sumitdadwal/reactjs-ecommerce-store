import { useContext } from 'react';

import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
        // (!isCartOpen) sets the value of isCartOpen opposite to its present value. so if it is false it will be true, when clicked again if it is true itll become false.
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon 