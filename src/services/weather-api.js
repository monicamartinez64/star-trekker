function getWeatherDataFromBackEnd(formData){
    console.log(formData);
    return fetch('/weather', {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(formData)
    }, {mode: "cors"})
    .then(res => res.json())
}

export default getWeatherDataFromBackEnd;