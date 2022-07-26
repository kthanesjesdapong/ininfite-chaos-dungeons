import React from 'react';
import styled from 'styled-components';

const ItemPictureStyles = styled.div`
display: flex;
// border: 1px solid white;
justify-content: center;
align_content: center
margin-top: 1px;
margin-bottom: 3.5px;
// margin-right: 19px;
padding-top: 2px;
padding-bottom: 5px;
width: 100%;

img {
    width: 35%;
    height: auto;
}

`;


export const ItemPicture = ({ img }) => {
    return (
        <ItemPictureStyles>
            <img src={img} alt='icon'></img>
        </ItemPictureStyles>
    );
};
