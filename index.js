let requestUrlBase = 'https://goweather.herokuapp.com/weather/';

let searchElement = document.getElementById('search-bar');

async function getWeatherInfo(){
    let rawSearchedCity = searchElement.value;
    let searchedCity = rawSearchedCity.toLowerCase().replaceAll(' ', '-');
    let requestUrl = `${requestUrlBase}${searchedCity}`
    console.log(requestUrl)

    let response = await fetch(requestUrl, {
            mode: 'no-cors',
            method: 'GET'
        }).then(response => {
            console.log('Request succeeded with opaque response:', response);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    let cityInfo = await response.json();
    console.log(cityInfo)
}