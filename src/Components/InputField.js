import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';



const fadeInAnimation = keyframes`
    
`;

const InputFieldStyles = styled.div`
// height {
//     200%;
// }

display: flex;
justify-content: center;
align_content: center
margin-top: 10px;
margin-bottom: 5px;
padding-top: 4px;
padding-bottom: 4px;
// border: 1px solid white;

    .form__input {
        background: none;
        outline: none;
        border: .5px solid var(--gray300);
        border-radius: 0.20rem;
        width: 50%;
        color: white;
        font-size: 1rem;
        // margin-bottom: 8px

    }
    .form__label {
        position: absolute;
        // top: -15px;
        color: white;
        // left: 6px;
        // background: var(--bg);
        font-size: .75rem;
    }

        // .form__label {
        //     position: absolute;
        // }
}
  
`;

const AnimatedText = styled.span`
    animation; ${fadeInAnimation} 0.3s fast;
`;

export const InputField = ({ text }) => {

    return (
        <InputFieldStyles >
            <input className='form__input' type="text" placeholder="" />
            {/* <label className='form__label'> {text}</label> */}
        </InputFieldStyles>
    );
};
