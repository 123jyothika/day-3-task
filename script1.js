const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest ();
xhr.open("GET",URL);
xhr.send();
xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    let countries=JSON.parse(xhr.response)
    for(let country of countries){
   
        console.log (country.name);
        console.log (country.region);
        console.log (country.subregion);
        console.log (country.population);
    
    
    }
};