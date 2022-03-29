import {DirectoryItemsContainer, BackgroundImage, Body} from './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
    const { imageUrl, title, linkUrl } = category;
    const navigate = useNavigate();
    const NavigateHandler = () => {
        navigate(linkUrl)
    }
    return(
        <DirectoryItemsContainer onClick={NavigateHandler}>
            <BackgroundImage 
            imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>

        </DirectoryItemsContainer>
    )

}

export default DirectoryItem;