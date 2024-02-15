import apiKey from "./apiKey"


const FetchRandom = async function(count=1) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };  
    let result = await  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error =>  error);
    return result;
}

const FetchSpecific = async function(date="2022-01-11") {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    let myArray = []
    let result = await  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error =>  error);
    myArray.push(result);
    return myArray;
}

const FetchRange = async function(startDate="2024-02-11", endDate="2024-02-12") {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    let result = await  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error =>  error);
    return result;
}

export {FetchSpecific, FetchRandom, FetchRange};
