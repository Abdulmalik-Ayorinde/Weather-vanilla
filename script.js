const mainContainer = document.getElementById("main-container")



// const h1 = document.createElement('h1')

// const newH1 = h1.innerHTML = "it still dey work"

// mainContainer.appendChild(h1)

const API_KEY = 'WOULD_SEND_TO_YOU'

async function getWeather() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${API_KEY}`)

    const res = await data.json()

    // console.log(res.name + "," + res.sys.country)

    // console.log(`${res.weather[0].main}`)

    // console.log(`${res.name} ${res.sys.country}`)

    const newDiv = document.createElement('div')

    const body = newDiv.innerHTML = `
        <h1>Search Result for: ${res.name} ${res.sys.country}</h1>

        <h3>Condition: <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"/> ${res.weather[0].main}</h3>
    `

    mainContainer.appendChild(newDiv)
}

getWeather()

// console.log("hello")
