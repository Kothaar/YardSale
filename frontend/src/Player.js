import React, { useEffect, useState } from 'react';
import axios from 'axios'
import querystring from 'querystring'


// Having trouble getting this to retrigger on track change
const Player =() => {
    const [playing, setPlaying] = useState([]);
    const [ track, setTrack] = useState('');
    const [ prog_ms, setProg ] = useState(0);
    const [ dur_ms, setDur ] = useState(100000);
    const [ trackChange, setTrackChange] = useState(0);
    const [ pbar, setpBar] = useState(0);

    useEffect(() =>{
        const url =  'https://api.spotify.com/v1/me/player/currently-playing?market=US'
        const parsed = querystring.parse(window.location.search)
        axios.get(url, {
            headers: {
            'Authorization' : 'Bearer ' + parsed['?access_token'],
            'Content-Type' : 'application/json'
            },
        })
        .then(PlayerRes => {
            console.log('Player TEST', PlayerRes)
            console.log(PlayerRes.data.progress_ms)
            console.log(PlayerRes.data.progress_ms)
            setTrack(PlayerRes.data.item.name)
            setPlaying(PlayerRes.data)
            setDur(PlayerRes.data.item.duration_ms)
            setProg(PlayerRes.data.progress_ms)
        })
        .catch(error => {
            console.log(error)
        })
        let interval = setInterval (() => {
            let x = Math.floor((prog_ms * 100/ dur_ms)) 
            console.log('current progress', prog_ms)
            console.log('Percentage', x)
            setpBar(x)
            setProg(prog_ms + 1000)
            console.log('new progress is s', prog_ms)
            if(prog_ms >= dur_ms){
                setTrackChange(trackChange + 1)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
        // trigger after dur_ms - prog_ms
    },[trackChange])

    // Is being called several times a second for some reason
    //setInterval (() => {
        //let x = Math.floor((prog_ms * 100/ dur_ms)) 
        //console.log('current progress', prog_ms)
        //console.log('Percentage', x)
        //setpBar(x)
        //setProg(prog_ms + 1000)
        //if(prog_ms >= dur_ms){
            //setTrackChange(trackChange + 1)
        //}
    //}, 1000)

    
    // Triggers useEffect after remaining amount of time in MS.
     //If track skipped won't continue trackin
    const bar = {
        backgroundColor: 'grey',
        borderRadius: 20,
        width: '100%',
        height: 5,

    }
    const progress = {
        backgroundColor: 'green',
        borderRadius: 20,
        // Set this to time remainng
        width: `${pbar}%`,
        height: 5,
    }

    return(
        <div>
            {playing.is_playing ? <p> Currently Playing: <br/> {track} - {playing.item.artists[0].name} </p>: <p>Currently Playing: Nothing</p>}
            {playing.is_playing ? <p>From: <br/> {playing.item.album.name} </p>: <p></p>}
            <div style = {bar}>
                <div style = {progress}>


                </div>
            </div>
        </div>
    )

}

export default Player;