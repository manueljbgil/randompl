import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ImageType = ['Dogs', 'Cats', 'Random'];

const SearchParams = () => {
    const [playlistName, setPlaylistName] = useState("");
    const [imageContent, setImageContent] = useState("");

    useEffect(() =>{
    },[])

    async function requestName(params) {
        const res = await fetch('https://api.quotable.io/random')
        const data = await res.json()
        console.log(data);
        
        setPlaylistName(data.content)
    }

    /*async function requestImage(){
        const res = await fetch('https://thatcopy.pw/catapi/rest/')
        const data = await res.json()
        console.log(data);

        setImageContent(data.url)
    }*/

    return (
        <div className="search-params">
            <form onSubmit={e => {e.preventDefault();requestName();requestImage()}}>
                <label htmlFor="name">
                    Playlist Name
                    <input id="name" value={""} onChange={e => setPlaylistName(e.target.value)} placeholder="funny playlist name"/>
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
            <img src={imageContent}/>        
            <p>{playlistName}</p>
        </div>
    );
}

export default SearchParams;