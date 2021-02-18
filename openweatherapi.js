const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=122.6750&appid=2dae5ca96933f1f94bb10b1be26c6491";

var request = new XMLHttpRequest();
request.open('GET',url,true);

request.onload = function () {
    var ol = document.getElementById("forcast");

    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response);

        /* data.forEach((country)=>{
            var content = document.createElement('li');
            content.innerHTML = (country.name + " - " + country.population.toLocaleString());
            ol.append(content); 
        }) */
        console.log(data);
    } else {
        var content = document.createElement('li');
        content.innerHTML = ("error fetching data");
        ol.append(content);
    }

}

request.send();