import {CheckoutItemContainer, ImageContainer, Image, NameQuantityPrice, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItemFromCheckout,  addItemToCart, removeItemToCart } = useContext(CartContext)

    const clearItemHandler = () => removeItemFromCheckout(cartItem)
    const incrementArrowHandler = () => addItemToCart(cartItem)
    const decrementArrowHandler = () => removeItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
            <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
        <NameQuantityPrice>{name}</NameQuantityPrice>
        <NameQuantityPrice>
            <Arrow onClick={decrementArrowHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={incrementArrowHandler}>&#10095;</Arrow>
        </NameQuantityPrice>
        <NameQuantityPrice>{price}</NameQuantityPrice>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;