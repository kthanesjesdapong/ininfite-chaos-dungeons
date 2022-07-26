import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`

    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-right: 5px;
    margin-top: 15px;

    .button__Wrapper {
        display: flex;
        justify-content: flex-end;
        align-content: flex-end
    }

    .button {
        font-size: 1rem;
        padding: 0.5em 1.5em;
        // border: 2px solid white;
        background-color: ${(props) =>
        props.outline ? 'transperant' : '#323c4e'};
        color: ${(props) => (props.outline ? 'black' : 'white')};
        display: inline - block;
        cursor: pointer;
        outline: none;
    }
`;

export const Button = ({
    btnText = 'test',
    outline = false,
    type,
    className = ''
}) => {
    return (
        <ButtonStyles outline={outline} className='button__Wrapper' type={type}>
            <p className='button'>{btnText}</p></ButtonStyles>
    );
};;;
