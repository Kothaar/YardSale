import React from 'react';
import SetBackground from './SetBackground';
import './App.css';
import Clock from './clock';
//import {GlobalStyle, Background } from './styles';
    //<GlobalStyle />
   // <Background />

function App() {

  return (
    <>
    <section className='flex-container'>
        <div id="forcast" className="forcast">
        </div>
        <div className = "widget1">
                Top Left Widget 1
        </div>
        <div className="clock">
        <Clock />
        </div>
        <div className = "widget2">
                Top Right Widget 2
        </div>
        <div className = "widget3">
                Mid Left Widget 3
        </div>
        <div className = "widget4">
                Mid Right Widget 4
        </div>
        <div className = "widget5">
                Bot left Widget 5
        </div>
        <div className = "widget6">
                Bot Right Widget 6
        </div>

    </section>
    <script src="openweatherapi.js"></script>
    <script src="hammen.js"></script>
    <SetBackground />
    </>
  )
}


export default App;
