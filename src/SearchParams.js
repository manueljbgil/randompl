import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ImageType = ['Dogs', 'Cats', 'Random'];

const SearchParams = () => {
    const [playlistName, setPlaylistName] = useState("");
    const [imageContent, setImageContent] = useState("");

    useEffect(() =>{

    })

    async function requestCoin(params) {
        const res = await fetch()
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="coin">
                    Playlist Name
                    <input id="coin" value={playlistName} onChange={e => setPlaylistName(e.target.value)} placeholder="funny playlist name"/>
                </label>
                <label>
                    Image Type
                    <select>
                    {
                        ImageType.map(img => (
                            <option value={img} key={img}>
                                {img}
                            </option>
                        ))
                    }
                    </select>
                </label>
                <button>Submit</button>
            </form>        
        </div>
    );
}

export default SearchParams;