import { useContext } from 'react';
import {ProductCardContainer, Image, AddToCartButton, Footer, Name, Price} from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product)
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} children={'Add to Cart'}/>
        </ProductCardContainer>
    )
}

export default ProductCard;