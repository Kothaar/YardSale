const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=-122.6750&units=imperial&appid=2dae5ca96933f1f94bb10b1be26c6491";

var request = new XMLHttpRequest();
request.open('GET',url,true);

request.onload = function () {
    var ol = document.getElementById("forcast");

    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);
        for(x in data.daily){
            if(x <5){
                var disp = document.getElementById("forcast");
                var display = document.createElement('div');
                display.style.display = 'inline-block';
                display.style.margin = 'auto';
                display.innerHTML = "High: "+Math.round(data.daily[x].temp.max) + " / " + "Low: "+ Math.round(data.daily[x].temp.min);
                disp.append(display);
            }
        }
    } else {
        var content = document.createElement('li');
        content.innerHTML = ("error fetching data");
        ol.append(content);
    }

}

request.send();