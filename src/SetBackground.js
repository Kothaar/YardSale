import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function SetBackground () {
    const API = 'https://api.nasa.gov/planetary/apod?api_key=';
    const KEY = process.env.REACT_APP_NASA_KEY;
    const url = API+KEY
    //const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    let bgimage = ' '
    //let bgimage = 'https://apod.nasa.gov/apod/image/2103/2021_03_02_Mars_Taurus_1024px.jpg'
    let alt_text = ' '

    const [apod, setImage] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then (res => {
            setImage(res.data)
        })
    }, [url])
    if(url){
        bgimage = apod.hdurl
        //alt_text = apod.text
        //console.log(API+KEY)
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