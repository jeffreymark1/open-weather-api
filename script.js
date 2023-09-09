
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "b2f3762212a93432cb01ba054a297a38";
const button = document.querySelector("#submitButton")
const input = document.querySelector("#textInput")
const cityName = input.value;

button.addEventListener('click', async () => {
    let inputname = input.value;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputname}&appid=b2f3762212a93432cb01ba054a297a38&units=imperial`)
    document.querySelector("#cityName").innerText=`${inputname}`
    document.querySelector("#temp").innerText = `${inputname} temperature is: ${Math.round(response.data.main.temp)}°F`
    console.log(Math.round(response.data.main.temp));
    console.log(inputname)
    console.log(response)
});


button.addEventListener('keydown', async (event) => {
    if (event.keyCode === 13) {
    let inputname = input.value;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputname}&appid=b2f3762212a93432cb01ba054a297a38&units=imperial`)
    document.querySelector("#cityName").innerText=`${inputname}`
    document.querySelector("#temp").innerText = `${inputname} temperature is: ${Math.round(response.data.main.temp)}°F`
    console.log(Math.round(response.data.main.temp));
    console.log(inputname)
    }
});

function show() {
   document.querySelector('#image')
        .style.display = "block";
    document.querySelector('#submitButton')
        .style.display = "none";
}