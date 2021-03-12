import axios from 'axios';
import React, {Component} from 'react'


export default class Forecast extends Component {

    componentDidMount = () =>{
        var lat;

        var long;
        navigator.geolocation.getCurrentPosition(function(position) {
            lat=position.coords.latitude;
            long = position.coords.longitude
            console.log("Latitude is :", lat.toFixed(4));
            console.log("Longitude is :", long.toFixed(4));
            axios.get('/getforecast/'+(position.coords.latitude).toFixed(4)+'/'+(position.coords.longitude).toFixed(4)).then(res => {
                var x;
                var d = new Date();
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
                
                for(x = 0; x<6;x++){
                    if(x <5){
                        var disp = document.getElementById("forcast");
                        var display = document.createElement('div');
                        display.style.display = 'inline-block';
                        display.style.margin = 'auto';
                        display.className = 'day day'+x;
                        display.style.textAlign='center';
                        var iconcode = res.data.daily[x].weather[0].icon
                        console.log(res.data.daily[x].weather[0].icon)
                        var icon = document.createElement('img');
                        icon.src = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
                        var text = document.createElement('div');
                        text.style.fontWeight = 'bold';
                        text.innerHTML = "High: "+Math.round(res.data.daily[x].temp.max)+ "&#186;F / Low: " +Math.round(res.data.daily[x].temp.min) + "&#186;F";
                        var day;
                        if(x === 0){
                            day = "Today"
                        }
                        else{
                            day = weekday[(d.getDay()+x)%7]
                        }
                        var dtext = document.createElement('h2')
                        dtext.style.margin = 'auto';
                        dtext.innerHTML = day;
                        display.append(dtext);
                        display.append(icon);
                        display.append(text);
                        disp.append(display);
                    }
                }
    
            })
          });
        

    };
    render() {
        return (
            <div>
        </div>
        )
    }

}