const input = document.getElementById("input")
const result = document.getElementById("result")
const submit = document.getElementById("submit")
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();
    }
    let apiCode = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c6ad1b47b475ec9cd5ea1829f6fed753`)
            .then(response => response.json())
            .then(data => {
                let name = data['name']
                let description = data['weather'][0]['description']
                let temp = (Math.floor(data.main.temp) - 273)
                let lottie = document.querySelector("#lottie-container");
                if (data.weather[0].description === "clear sky") {
                    lottie.innerHTML = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ms53nlfm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`;
                } else {
                    lottie.innerHTML = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ms53nlfm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autop`;
                }
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
                let heute = `heute:${data.weather[0].description}.Die Temperatur berträgt derzeit ${Math.floor(data.main.temp) - 273}°;die Höchsttempertur wird bei ${Math.floor(data.main.temp_max) - 273}° liegen. `
                let speed = data['wind']['speed']
                let sunrise = new Date(data['sys']['sunrise'] * 1000).toLocaleTimeString()
                let sunset = new Date(data['sys']['sunset'] * 1000).toLocaleTimeString()
                result.innerHTML = name + '<br>' + description + '<br>' + temp + '° c' + '<br>' + days + " " + 'HEUTE' + '<br>' + heute + '<br>' + sunrise + '<br>' + sunset + '<br>' + speed + " " + 'Km/h'

            })
    }
})
submit.addEventListener("click", function () {
    apiCode()
})