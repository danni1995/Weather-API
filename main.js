const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&units=metric&appid=f0eb732228a43bd0a4d7e82428f4bb08";

fetch(apiUrl) // fetching the api 
    .then(result =>  result.json()) // converting the api into json format so it can be easily readable and accessaable.
    .then(data => {
        console.log(data) // and here I console log the data to be used. 

        var icon;

        try { //Here I am catching the information from the openweathermap api and assigning it to the image.
            icon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
        } catch(error) {
            throw 'an error happened: ' + error;
        }
        
        var temp;

        try{ // Same thing here, catching the current temperature from the api and displaying it.
            temp = Math.floor(data.current.temp);
        } catch(error){
            throw 'an error happened' + error;
        }
        var weather;

        try{  //catching current weather data from the api. 
            weather = data.current.weather[0].main;
        } catch (error){
            throw 'an error happened' + error;
        }

        var humit;
        try{
            humit = data.current.humidity;
        } catch(error){
            throw 'an error happened' + error;
        }

        var windSpeed;
        try{
            windSpeed = data.current.wind_speed;
        } catch(error) {
            throw 'an error happened' + error;
        }

        $('.icon').attr('src', icon); //Assingning the icon to the img class is html
        $('.temp').append(temp);
        $('.weather').append(weather);
        $('.humit').append(humit);
        $('.wind-speed').append(windSpeed);
        
    });

 var button = document.getElementById('press');
 var extraInfo = document.getElementById('info');

button.addEventListener('click', function(){extraInfo.style.opacity = 1;});