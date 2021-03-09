
let button = document.querySelector('.submit')
let inputValue = document.querySelector('.input_text')
let name = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')
let weather = document.querySelector('.weather')
let container = document.querySelector('.container')
let card = document.querySelector('.card')

// let key = "d7b87ef2ebf23043dff5dcff9b32a98e"
// 50a7aa80fa492fa92e874d23ad061374


button.addEventListener('click', function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=7866b68be8fdb442cd145b9eccf9b6a9`)
        .then(response => response.json())

        .then(data => {
            console.log(data.weather);
            if (data.weather[0].description === "clear sky")
                card.innerHTML = card.innerHTML = `<h1> test </h1>`;
            else if (data.weather[0].description === "few clouds" || data.weather[0].description === "overcast clouds")
                card.innerHTML = `<h1> test </h1>`;
            else {
                card.innerHTML = `<h1> test </h1>`;
            }

            desc.innerHTML = data['main']['temp'];
            name.innerHTML = data['name'];
            weather.innerHTML = data['weather'][0]['description'];
        })


        .catch(err => temp.innerHTML = 'Error')
})

