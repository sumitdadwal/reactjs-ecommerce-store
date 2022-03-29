import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.components';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => 
                        <ProductCard key={product.id} product={product} />                        
                    )}
            </Preview>

        </CategoryPreviewContainer>
    )
}
export default CategoryPreview;