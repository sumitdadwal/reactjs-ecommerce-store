import { useContext } from 'react';

import { CartIconContainer, Icon, ItemCount } from'./cart-icon.styles.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
        // (!isCartOpen) sets the value of isCartOpen opposite to its present value. so if it is false it will be true, when clicked again if it is true itll become false.
    }

    return (
        <CartIconContainer>
            <Icon onClick={toggleIsCartOpen} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon 