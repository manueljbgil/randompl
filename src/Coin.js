import React from 'react';
import ReactDOM from 'react-dom';

const Coin = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.currency}</h3>
        </div>
    );
}
export default Coin;