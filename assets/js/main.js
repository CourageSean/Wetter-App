fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyBKvcd0kTOrakKPJh6_fS3DrLdBHv2jbpM', { mode: "cors" })
    .then(response => response.json())
    .then(data => console.log(data))let input = document.getElementById("give-city")
let result = document.getElementById("result")
let submit = document.getElementById("submit")
let sunUp = document.getElementById("sun-up")
let pressure = document.getElementById("pressure")
let wind = document.getElementById("wind")
let tempMax = document.getElementById("temp-max")
let sunDown = document.getElementById("sun-down")
let humidity = document.getElementById("humidity")
let tempFeeling = document.getElementById("temp-feeling")
let tempMin = document.getElementById("temp-min")
let outputTemp = document.getElementById("output-temperature")
let outputCity = document.getElementById("output-city-name")
let descriptionHeute = document.getElementById("description-heute")


submit.addEventListener("click", function (event) {
    console.log(input.value)
    // if (event.keyCode === 13) {
    //     event.preventDefault();
    //     submit.click();
    // }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c6ad1b47b475ec9cd5ea1829f6fed753&lang=de`)
        .then(response => response.json())
        .then(data => {
            let name = data['name']
            let description = data['weather'][0]['description']
            let temp = (Math.floor(data.main.temp) - 273)
            let temp2 = (Math.floor(data.main.temp_max) - 273)
            let press = data['main']['pressure']
            let feuchtigkeit = data['main']['humidity']
            let lottie = document.querySelector("#lottie-container");
            // if (data.weather[0].description === "clear sky") {
            //     lottie.innerHTML = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ms53nlfm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`;
            // } else {
            //     lottie.innerHTML = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ms53nlfm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autop`;
            // }
            let d = new Date()
            let tag = [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag"
            ]

            let days = tag[d.getDay()]
            let heute = `Heute ist ${days} und heute wird es ${description}. Die Temperatur berträgt derzeit ${Math.floor(data.main.temp) - 273}° ,die Höchsttemperatur wird bei ${Math.floor(data.main.temp_max) - 273}°liegen.`
            let speed = data['wind']['speed']
            let sunrise = new Date(data['sys']['sunrise'] * 1000).toLocaleTimeString()
            let sunset = new Date(data['sys']['sunset'] * 1000).toLocaleTimeString()

            sunUp.innerHTML = sunrise
            sunDown.innerHTML = sunset
            wind.innerHTML = speed + " km/h"
            tempMax.innerHTML = temp2 + "°"
            tempMin.innerHTML = temp + "°"
            outputTemp.innerHTML = temp + "°"
            outputCity.innerHTML = name
            descriptionHeute.innerHTML = heute
            pressure.innerHTML = press + "hPa"
            humidity.innerHTML = feuchtigkeit + "%"

            console.log(data)
        })

})

/*
01d = Klarer Himmel
04n = bewölkt
13d = schnee
*/