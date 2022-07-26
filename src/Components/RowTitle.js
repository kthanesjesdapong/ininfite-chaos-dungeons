import React from 'react';
import styled from 'styled-components';

const RowTitleStyles = styled.div`
    display: flex;
    flex-direction: row;
    width: 85vh;
    justify-content: space-between;
    border-bottom-width: 1px;
    padding-bottom: 5px;
    

    .icon__Title {
        color: #323c4e;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-basis: 12%;
        margin: 5px 0;
        width: 20%;
        padding: 3px 0;    
    }

    .name__Title {
        display: flex;
        margin-left: 9px;
        justify-content: flex-start;
        align-items: center;
        width: 35%;
        color: white;
    }

    .market__Title {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 19%;
        h3{
            align-text: center;
        }
    }

    .shard__Title {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 15%;
        color: white;
    }

`;

export const RowTitle = ({ blank = '', title, marketPrice, shardCost }) => {
    return (
        <RowTitleStyles>
            <div className="icon__Title">
                <h3>yuur</h3>
            </div>
            <div className="name__Title">
                <h3>{title}</h3>
            </div>
            <div className="market__Title">
                <p>{marketPrice}</p>
            </div>
            <div className="shard__Title">
                <p>{shardCost}</p>
            </div>
        </RowTitleStyles>
    );
};
