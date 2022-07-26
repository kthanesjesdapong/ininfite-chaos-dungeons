import React from 'react';
import styled, { keyframes } from 'styled-components';
import { InputField } from './InputField';
import { ItemName } from './ItemName';
import { ItemPicture } from './ItemPicture';

const FormStyles = styled.div`

background: grey;
border-radius: 0.50rem;

.item__picture {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 8px;
    padding-bottom: 8px;;
    p {
        color: grey;
    }
}


.item__name {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 8px;
    padding-bottom: 8px;;
}


.gold__value {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 8px;
    padding-bottom: 8px;;
    
}

.market__value {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 8px;
    padding-bottom: 8px;;
    color: white;
}

.submit {
    justify-content: flex-end;
    align-self: end;
}

`;


export const Form = () => {
    return (
        <FormStyles className='form'>
            <div></div>
            <div className='item__picture'>
                <p>icon</p>
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_155.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_156.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_8_227.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_161.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_162.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_163.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_6_105.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_6_104.webp' />
                <ItemPicture img='https://lostarkcodex.com/icons/use_7_181.webp' />
            </div>
            <div className="item__name">
                <p>Item</p>
                <ItemName text='Honor Leapstone' />
                <ItemName text='G Honor Leapstone' />
                <ItemName text='Honor Shard Pouch (L)' />
                <ItemName text='Solar Grace' />
                <ItemName text='Solar Blessing' />
                <ItemName text='Solar Protection' />
                <ItemName text='Destruction Stone Crystal' />
                <ItemName text='Guard Stone Crystal' />
                <ItemName text='Powder of Sage' />

            </div>

            <div className='gold__value'>
                <p>Auction House Price</p>
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />
                <InputField text='Value in Gold' />


            </div>

            <div className='market__value'>
                <p>Current Shard Cost</p>
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />
                <InputField text='Crystal Cost' />


            </div>
            <div className='submit'><button>submit</button></div>
        </FormStyles>

    );
};
