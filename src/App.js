import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import Coin from './Coin';
import SearchParams from './SearchParams';

const App = () => {
    return (
        <div className="container">
            <h1 className="title">Playlist Generator</h1>
            <SearchParams />
            {/*<Coin name="bitcoin" currency="Eur" />*/}
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
