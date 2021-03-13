import React from "react";
import SetBackground from "./SetBackground";
import "./App.css";
import Clock from "./clock";
import Forecast from "./weather";
//import {GlobalStyle, Background } from './styles';
//<GlobalStyle />
// <Background />
import Burger from "./Burger";
import ImgGallery from "./TopArtistGallery";
import NewReleasesGallery from "./NewReleasesGallery";
import Player from "./Player";
import CatFacts from "./CatFacts";

function App() {
  return (
    <div id='outer-container'>
      <Burger pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id='page-wrap'>
        <section className='flex-container'>
          <div id='forcast' className='widget forcast'>
            <Forecast />
          </div>
          <div className='widget widget1'>
            <div>
              <h3 className='spotifyCover'>US Top Releases</h3>
              <NewReleasesGallery />
            </div>
          </div>
          <div className='widget clock'>
            <Clock />
          </div>
          <div className='widget widget2'>
            <h3 className='spotifyCover'>
              Your Top Artists
              <ImgGallery />
            </h3>
          </div>

          <div className='widget widget5'>
            <CatFacts />
          </div>
          <div className='widget widget6'>
            <Player />
          </div>
        </section>
        <script src='openweatherapi.js'></script>
        <script src='hammen.js'></script>
        <SetBackground />
      </div>
    </div>
  );
}

export default App;
