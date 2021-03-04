import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function SetBackground () {
    //const API = 'https://api.nasa.gov/planetary/apod?api_key=';
    //const KEY = 'process.env.NASA_KEY';
    //const url = API+KEY
    const url = ''
    const [apod, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then (res => {
            setProduct(res.data)
        })

    }, [url])

    return (
        <div style = {{
            backgroundImage: `url(${apod.hdurl})`, backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            widith: '100vw'
        }}>
        </div>
    )

}