import React from 'react';
import SetBackground from './SetBackground';
import './App.css';
import Clock from './clock';
import Forecast from './weather';
//import {GlobalStyle, Background } from './styles';
    //<GlobalStyle />
   // <Background />
import Burger from './Burger';
import ImgGallery from './TopArtistGallery';
import NewReleasesGallery from './NewReleasesGallery';

function App() {

  return (
<div id="outer-container">
<Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
<div id="page-wrap">
    <section className='flex-container'>
        <div id="forcast" className="widget forcast">
        <Forecast/>
        </div>
        <div className = "widget widget1">
                <h3 className = "spotifyCover">US Top Releases
                        <NewReleasesGallery />
                </h3>
        </div>
        <div className="widget clock">
                <Clock />
        </div>
        <div className = "widget widget2">
                <h3 className = "spotifyCover">Your Top Artists
                        <ImgGallery />
                </h3>
        </div>
       
        <div className = "widget widget5">
                 Add a new widget here!
        </div>
        <div  className = "widget widget6">
               ....or here!
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
