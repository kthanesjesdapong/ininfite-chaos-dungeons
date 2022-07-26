import React from 'react';
import styled from 'styled-components';

const ItemNameStyles = styled.div`
display: flex;
// border: 1px solid white;
justify-content: center;
align_content: center
margin-top: 6px;
margin-bottom: 5px;
margin-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
width: 100%;

.item__wrapper { 
    display: flex;

}



label {
    color: white;
    align-self: center;
}

`;

export const ItemName = ({ text, img }) => {
    return (
        <ItemNameStyles>
            <label>{text}</label>
        </ItemNameStyles>
    );
};
