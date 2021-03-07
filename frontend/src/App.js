import React from 'react';
import SetBackground from './SetBackground';
import './App.css'
import { useLocation, Route, useParams} from 'react-router-dom'
//import {GlobalStyle, Background } from './styles';
    //<GlobalStyle />
   // <Background />

function App() {

  return (
    <>
    <section class='flex-container'>
        <div id="forcast" class="forcast">
        </div>
        <div class = "widget1">
                Top Left Widget 1
        </div>
        <div id="time" class="time">
        </div>
        <div class = "widget2">
                Top Right Widget 2
        </div>
        <div class = "widget3">
                Mid Left Widget 3
        </div>
        <div class = "widget4">
                Mid Right Widget 4
        </div>
        <div class = "widget5">
                Bot left Widget 5
        </div>
        <div class = "widget6">
                Bot Right Widget 6
        </div>
    </section>
    <SetBackground />
    </>
  )
}


export default App;
