import React from 'react';
import SetBackground from './SetBackground';
import './App.css';
import Clock from './clock';
import Forecast from './weather';
import TopArtists from './TopArtists'
import NewReleases from './NewReleases'
//import {GlobalStyle, Background } from './styles';
    //<GlobalStyle />
   // <Background />
import Burger from './Burger';

function App() {

  return (
<div id="outer-container">
<Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
<div id="page-wrap">
    <section className='flex-container'>
        <div id="forcast" className="forcast">
        <Forecast/>
        </div>
        <div className = "widget widget1">
                Top Left Widget 1
        </div>
        <div className="clock">
        <Clock />
        </div>
        <div className = "widget widget2">
                Top Right Widget 2
        </div>
        <div className = "widget widget3">
        <NewReleases />
        </div>
        <div className = "widget widget4">
        <TopArtists />
        </div>
        <div className = "widget widget5">
                Bot left Widget 5
        </div>
        <div className = "widget widget6">
                Bot Right Widget 6
        </div>

    </section>
    <script src="openweatherapi.js"></script>
    <script src="hammen.js"></script>
    <SetBackground />
    </div>
    </div>
  )
}


export default App;
