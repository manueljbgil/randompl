import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ImageType = ['Dogs', 'Cats', 'Random'];

const SearchParams = () => {
    const [playlistName, setPlaylistName] = useState("");
    const [imageType, setImageType] = useState("")
    const [imageContent, setImageContent] = useState("");

    useEffect(() =>{
    },[])

    async function requestName() {
        const res = await fetch('https://api.quotable.io/random?minLength=40&maxLength=40')
        const data = await res.json()
        console.log(data);
        
        setPlaylistName(data.content)
    }

    async function requestImage(){

        //https://random.dog/woof.json (dogs)
        //'https://random-d.uk/api/v2/random/' (random)
        const res = await fetch('https://thatcopy.pw/catapi/rest/')
        const data = await res.json()
        console.log(data);

        setImageContent(data.url)
    }

    return (
        <div>
            <div className="search-params">
                <form className="form" onSubmit={e => {e.preventDefault();requestName();requestImage()}}>
                    {/*<label htmlFor="name">
                        Playlist Name
                        <input id="name" value={""} onChange={e => setPlaylistName(e.target.value)} placeholder="funny playlist name"/>
                    </label>
                    <label>
                        Image Type
                        <select onChange={e => setImageType(e.target.value)}>
                        {
                            ImageType.map(img => (
                                <option value={img} key={img}>
                                    {img}
                                </option>
                            ))
                        }
                    </select>
                    </label>*/}
                    <div className="form-options">
                        {ImageType.map(img => (
                            <input className="input-button" type="button" value={img} key={img}/>
                            ))
                        }
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
            <div className="results">
                <img className="image-result" src={imageContent} />        
                <h2>{playlistName}</h2>
            </div>
        </div>
    );
}

export default SearchParams;