import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SetBackground () {
    const API = 'https://api.nasa.gov/planetary/apod?api_key=';
    const KEY = process.env.REACT_APP_NASA_KEY;
    const url = API+KEY
    let bgimage = ' '
    let alt_text = ' '
    console.log(url)

    const [apod, setImage] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then (res => {
            setImage(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [url])
    if(apod){
        bgimage = apod.hdurl
        alt_text = apod.title
        //alt_text = apod.text
        document.body.style.backgroundImage = ;
    }
    return (
        <div style = {{
            backgroundImage: `url(${bgimage})`, backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            widith: '100vw'
        }}>
            {alt_text}
        </div>
    )

}