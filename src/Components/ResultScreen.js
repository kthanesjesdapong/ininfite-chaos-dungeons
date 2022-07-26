import React from 'react';
import styled from 'styled-components';
import { goldM, shardsL, resultArr } from '../helperFunctions/items';

const ResultScreenStyles = styled.div`
    .result__Container {
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }

    .result__Wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        border-bottom-width: 1px;
        padding-bottom: 5px;
        color: white;
    }
    

    .name__Wrapper {
        display: flex;
        margin-left: 9px;
        justify-content: flex-start;
        align-items: center;
        width: 35%;
        color: white;
    }

    .amount__Wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 19%;
        h3{
            align-text: center;
        }
    }

    .shard__Wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 15%;
        color: white;
    }

    .item__Container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        color: white;
    }

    .itemName__Wrapper {
        display: flex;
        margin-left: 9px;
        justify-content: flex-start;
        align-items: center;
        width: 35%;
        color: white;
    }
    .itemAmount__Wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 19%;
        h3 {
            text-align: center;
        }
    }

    .shardShard__Wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 19%;
        h3 {
            text-align: center;
        }
    }

    .total__Wrapper {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

`;

export const ResultScreen = (arrP, { goldMade, shardsLeft, totalShards }) => {

    console.log(goldMade);


    return (
        <ResultScreenStyles  >
            <div className='result__Container'>
                <h1>Total Shards:{totalShards}</h1>
            </div>
            <div className='result__Wrapper'>
                <div className='name__Wrapper'>
                    <h3>Item Name</h3>
                </div>
                <div className='amount__Wrapper'>
                    <h3>Amount </h3>
                </div>
                <div className='shard__Wrapper'>
                    <h3>Shard Spent</h3>
                </div>
            </div>


            {arrP.arrP.map((ele, idx) => {
                return (
                    <div className='item__Container' key={idx}>
                        <div className="itemName__Wrapper">
                            <p>{ele.itemName}</p>
                        </div>
                        <div className="itemAmount__Wrapper">
                            <p>
                                {ele.amountBought}
                            </p>
                        </div>
                        <div className="shardShard__Wrapper">
                            <p>
                                {ele.shardSpent}
                            </p>
                        </div>
                    </div>
                );
            })}
            <div className='total__Wrapper'>
                <p>Gold Made:{goldM}</p>
                <p>Shards Left:{shardsL}</p>
            </div>



        </ResultScreenStyles>
    );
};
