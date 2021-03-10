const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=-122.6750&units=imperial&appid=2dae5ca96933f1f94bb10b1be26c6491";

var hilo;

fetch(url).then(function (response){
    console.log(response.ok);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {
    hilo = data;
    var ol = document.getElementById("forcast");
        for(x in hilo.daily){
            if(x <5){
                console.log(hilo.daily[x])
                var disp = document.getElementById("forcast");
                var display = document.createElement('div');
                display.style.display = 'inline-block';
                display.style.margin = 'auto';
                var iconcode = hilo.daily[x].weather[0].icon
                console.log(hilo.daily[x].weather[0].icon)
                var icon = document.createElement('img');
                icon.src = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
                var text = document.createElement('div');
                text.innerHTML = "High: "+Math.round(hilo.daily[x].temp.max) + " / " + "Low: "+ Math.round(hilo.daily[x].temp.min);
                display.append(icon);
                display.append(text);
                disp.append(display);
            }
        } 
}).catch(function (error) {
    console.warn(error);
});