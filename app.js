let weather = {
    apiKey: "76ef2b7c390c27b11497cbde51f19a47",
    // fetchWeather: function() {
    //     fetch(
    //         "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=76ef2b7c390c27b11497cbde51f19a47"
    //     )
    //     .then((response) => response.json())
    //     .then((data)=>console.log(data));

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function (data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+ name;
    }
};

