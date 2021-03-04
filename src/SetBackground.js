import React from 'react';
import Background from './test.png'

export default function SetBackground() {
    document.body.style.backgroundImage = Background
    return (

        //<div styles={{ backgroundImage:`(${Background})`}}>
        <div style={{ 
            backgroundImage: `url(${Background})`, backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            height: '100vh',
            width: '100vw'
          }}> 
          <h1> Test </h1>
        </div>
    );
}
