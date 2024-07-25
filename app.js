const tempreture = document.getElementById("tempreture")
const windSpeed = document.getElementById("windSpeed")
const place = document.getElementById("location")
const date = document.getElementById("date")


async function getWeather(){
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`
try {
  const res =  await fetch(apiUrl)
  const data = await res.json()
  return data
} catch (err) {
  console.error(err.message);
}
}

async function showWeather(){
  try{
    const data = await getWeather()
    const dateObject = new Date(data.current.time);
    const convertedTime = dateObject.toLocaleString("en-US", {
      timeZone: "America/Vancouver", 
      hour12: true,
    })
  
    tempreture.innerHTML = `${data.current.temperature_2m} °C`
    windSpeed.innerHTML = `${data.current.wind_speed_10m} km/h`
    place.innerHTML = `${data.timezone}`
    date.innerHTML = convertedTime
    
  }catch(err){
    console.log("Error")
  }
}

showWeather()