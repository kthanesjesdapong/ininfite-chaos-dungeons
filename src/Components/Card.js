import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RowTitle } from './RowTitle';
import newData from '../newData.json';
import { Button } from './Button';
import { useFormik } from 'formik';
import { whatToBuy, goldM, shardsL, resultArr } from '../helperFunctions/items';
import { ResultScreen } from './ResultScreen';




const CardStyles = styled.div`
    background: #323c4e;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    transition: transform 200ms ease-in 0s;
    width: 87vh;
    height: 82vh;

    .wrapper {
        display: flex;
        flex-direction: column;
    }


    .button{
        display: flex;
        justify-content: flex-end;
        align-item: flex-end;
    }

    .item__Row {
        display: flex;
        flex-direction: row;
        width: 85vh;
        justify-content: space-between;
        border-radius: 3px;
        margin-bottom: 10px;
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
            margin-right: 1px;    
        }
    
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
        

            
        .totalShard__wrapper {
            display: flex;
            align-self: flex-end;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            color: white;
            margin-top: 10px;
        }


    `;


export const Card = () => {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(undefined);

    const totes = [];
    let totalShards;
    const formik = useFormik({
        initialValues: {
            newData,
            amountBought: new Array(8).fill(0),
            auctionHouseCost: new Array(8).fill(0),
            totalShards: 0

        },
        onSubmit: (values) => {
            // console.log(values);
            //Transforming Object into an array so I can reassign the values of amountBought && auctionHouse Cost
            const newDataArr = Object.values(newData);

            // This loop is for reassigning the values of both amountBought / auctionHouseCost
            for (let i = 0; i < newDataArr.length; i++) {
                newDataArr[i].amountBought = Number(values.amountBought[i]);
                newDataArr[i].auctionHouseCost = Number(values.auctionHouseCost[i]);
            }

            totalShards = Number(values.totalShards);
            totes.push(totalShards);
            setResult(whatToBuy(totalShards, 0, newDataArr));
        }
    });

    useEffect(() => {
        if (result === undefined) {
            setLoading(true);
        } else {
            setLoading(false);
            // console.log(result, 'THIS IS THE RESULT FROM LINE 158');
            console.log(shardsL, goldM, resultArr);
            // console.log(gold, 'THIS IS HOW MUCH GOLD WE MADE');
            // console.log(shards, 'THIS IS HOW MUCH SHARDS WE HAVE LEFT');
        }
    }, [result]);


    return (
        <CardStyles>
            <div className='wrapper'>

                {result === undefined ?

                    <form onSubmit={formik.handleSubmit}>
                        <RowTitle title='Item Name' marketPrice='Auction House Cost' shardCost='Amount Bought?' />
                        {newData && Object.keys(newData).map((row, idx) => (

                            <div className='item__Row' key={idx}>
                                <img src={formik.values.newData[row].img} alt="" />
                                <div className="name__Wrapper">
                                    <h3>{formik.values.newData[row].label}</h3>
                                </div>
                                <div className='m__Wrapper'>
                                    <input
                                        name={`auctionHouseCost[${newData[row].itemNum}]`}
                                        defaultValue=''
                                        onChange={(formik.handleChange)}
                                    />
                                </div>
                                <div className="shard__Wrapper">
                                    <input
                                        name={`amountBought[${newData[row].itemNum}]`}
                                        defaultValue=''
                                        onChange={(formik.handleChange)} />
                                </div>
                            </div>
                        ))}
                        <div className='button'>
                            <div className='totalShard__wrapper'>
                                <p>Total Shards</p>
                                <input className='totalShard'
                                    defaultValue=''
                                    name='totalShards'
                                    onChange={(formik.handleChange)}
                                />
                            </div>
                            <Button btnText='Submit' type='submit' />
                        </div>
                    </form>
                    :
                    <ResultScreen arrP={resultArr} goldMade={goldM} shardsLeft={shardsL} totalShards={totes[0]} className='result__Container' />
                }
            </div>
        </CardStyles >

    );
};


/*
   <RowTitle title='Item Name' marketPrice='Auction House Cost' shardCost='Amount Bought?' />

                <form onSubmit={formik.handleSubmit}>

                    {newData && Object.keys(newData).map((row, idx) => (

                        <div className='item__Row' key={idx}>
                            <img src={formik.values.newData[row].img} alt="" />
                            <div className="name__Wrapper">
                                <h3>{formik.values.newData[row].label}</h3>
                            </div>
                            <div className='m__Wrapper'>
                                <input
                                    name={`auctionHouseCost[${newData[row].itemNum}]`}
                                    defaultValue=''
                                    onChange={(formik.handleChange)}
                                />
                            </div>
                            <div className="shard__Wrapper">
                                <input
                                    name={`amountBought[${newData[row].itemNum}]`}
                                    defaultValue=''
                                    onChange={(formik.handleChange)} />
                            </div>
                        </div>
                    ))}
                    <div className='button'>
                        <div className='totalShard__wrapper'>
                            <p>Total Shards</p>
                            <input className='totalShard'
                                defaultValue=''
                                name='totalShards'
                                onChange={(formik.handleChange)}
                            />
                        </div>
                        <Button btnText='Submit' type='submit' />
                    </div>
                </form>



*/