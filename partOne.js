let postalCode = 'http://api.zippopotam.us/us/90210';
let weather = document.getElementById('result');
let btn = document.querySelector('button');


// // Make an AJAX request
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function getUrl(userZipcode){
        return `http://api.zippopotam.us/us/${userZipcode}`
    
}
// must add =json at the end of a  url
function getSevenTimerUrl(long, lat){
    return  `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`
}
    btn.addEventListener('click', () => {
            let userZipcode = document.getElementById('weather-input').value;
            getJSON(getUrl(userZipcode), (json)=> {
                console.log(json)
                // get long and lat
                const long = json.places[0].longitude;
                const lat = json.places[0].latitude;
                // console.log({long, lat});
                getJSON(getSevenTimerUrl(long, lat), (json)=> {
                    ///get weather data
                    console.log(json);
            
                })
            });
        });

        // // Generate the HTML for city, state and weather
    // function generateHTML(data) {
    //     let section = document.createElement('section');
    //     weather.appendChild(section);


