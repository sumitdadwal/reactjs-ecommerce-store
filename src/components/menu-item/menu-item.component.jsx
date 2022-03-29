import React from "react";

import {MenuItem, BackgroundImage, Content, Title, Subtitle} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size }) => {
    return (

        <MenuItem>
            <BackgroundImage  style={{
            backgroundImage: `url(${imageUrl})`
        }} />
            <Content>
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </Content>
        </MenuItem>
    )
}

export default MenuItem;