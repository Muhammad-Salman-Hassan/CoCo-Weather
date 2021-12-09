

// -----------declaring Valribale and Getting  Element -----------------------------

const card = document.querySelector(".card");
const details = document.querySelector(".detail");
const cityform = document.querySelector(".change-location");
const time = document.querySelector('.time')
const icon= document.querySelector('.icon img')


// --------Updataing UI Function-----------
const updateUi = (data) => {
  console.log(data)
const {cityDetail,weather}=data

  //-----------------updating template-----------------------------
  details.innerHTML = `
    <h5 class='my-3'>${cityDetail.EnglishName}</h5>
    <div class='my-3'>${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `;

    // <--------------------------------Toggling Card Via Display Property---------------------------->
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

    // <-------------Updating Image when Calling data from API-------------------------->
    let timesrc= "";
    if(weather.IsDayTime){
        timesrc = 'images/day.svg';
       
    }else{
        timesrc='images/night.svg'
        
    }

    time.setAttribute('src', timesrc)
    
    
};


// <----------------Getting City function on another file Forcast.js and use as a variable-------------->
const updateCity = async (city) => {
  const cityDetail = await getCity(city);
//   <----------------------------Adding Keys to Function which is Imp on API--------------------------------->
  const weather = await getweather(cityDetail.Key);

  return {
    cityDetail,
    weather,
  };
};

cityform.addEventListener("submit", (e) => {
  e.preventDefault();
  //get city value
  const city = cityform.city.value.trim();

  cityform.reset();
  updateCity(city)
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => console.log(err));
});
