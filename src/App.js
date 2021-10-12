import React from 'react';
import ReactDOM from 'react-dom';
import Coin from './Coin';
import SearchParams from './SearchParams';

const App = () => {
    return (
        <div>
            <h1>Playlist Generator</h1>
            <SearchParams />
            {/*<Coin name="bitcoin" currency="Eur" />*/}
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
