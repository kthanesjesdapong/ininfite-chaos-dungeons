import React, { useState } from 'react';
import styled from 'styled-components';

const RowStyles = styled.div`
    display: flex;
    flex-direction: row;
    width: 85vh;
    justify-content: space-between;
    border-radius: 3px;
    border-bottom: 1px solid white;
    margin-left: 1px;



    img {
    border-left: 1px solid white;
    border-right: 1px solid white;
    }

    .name__Wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 35%;
        color: white;
 
    }

    .m__Wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
        color: white;
        width: 12%;



        input {
            margin: 10px 0;
            padding: 4px 0;
            align-self: center;
            outline: none;
            border: .5px solid var(--gray300);
            border-radius: 0.20rem;
            color: white;
            font-size: .75rem;
            width: 60%;
            height: 30%;
            background: none;
        }
    }

    .shard__Wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 12%;
        color: white;
        border-left: 1px solid black;


        input {
            margin: 10px 0;
            padding: 4px 0;
            align-self: center;
            outline: none;
            border: .5px solid var(--gray300);
            border-radius: 0.20rem;
            color: white;
            font-size: .75rem;
            width: 60%;
            height: 30%;
            background: none;
        }
    }
    `;


export const Row = ({ img, name, items }) => {

    const [marketValue, setMarketValue] = useState(0);
    const [shardCost, setShardCost] = useState(0);

    const handleChange = (event) => {
        setMarketValue(event.target.value);
        console.log(marketValue);
    };


    return (
        <RowStyles>
            <img src={img} alt='' />
            <div className='name__Wrapper'>
                <h3>{name}</h3>
            </div>
            <div className='m__Wrapper'>
                <input value={marketValue} onChange={handleChange} />
            </div>
            <div className="shard__Wrapper">
                <input />
            </div>
        </RowStyles>
    );
};
