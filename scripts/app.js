

const cityform =document.querySelector('.change-location')

const updateCity=async (city)=>{
const cityDetail=await getCity(city) 
const weather=await getweather(cityDetail.Key)

return {
    cityDetail:cityDetail,
    weather:weather
}
}

cityform.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get city value
    const city=cityform.city.value.trim();

    cityform.reset()
    updateCity(city).then(data=>console.log(data)).catch(err=>console.log(err))
})