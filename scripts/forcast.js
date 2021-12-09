const key = "0PBIQHI2BYyEdFMOYARA9B9cZBtJQvfh";

// ------------------------------------------Getting Weather Update from API--------------------------------------------------
const getweather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};


// ---------------------------------------------gettting city update form API----------------------------------------------
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getweather('261158')

// getCity("karachi")
//   .then((data) => {
//     return getweather(data.Key);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
