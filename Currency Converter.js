const api = "https://api.exchangerate-api.com/v4/latest/USD";

let search = document.getElementById("amount");
let convert = document.querySelector(".convertB");
let fromCurrency = document.getElementById("sel1");
let toCurrency = document.getElementById("sel2");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;
//Created by Khushi
fromCurrency.addEventListener('change', (event) =>{
    resultFrom = event.target.value;
});

toCurrency.addEventListener('change', (event) =>{
    resultTo = event.target.value;
});
//Created by Khushi
search.addEventListener('input', (event) =>{
    searchValue = event.target.value;
});

convert.addEventListener("click", getResults);

function getResults() {
    if (!resultFrom || !resultTo || !searchValue){
        alert("Please fill in all fields.");
        return;
    }

    fetch(api)
        .then(currency => currency.json())
        .then(displayResults)
        .catch(error => console.error('Error fetching the exchange rates:', error));
}
//Created by Khushi
function displayResults(currency){
    if (currency.rates[resultFrom] && currency.rates[resultTo]){
        let fromRate = currency.rates[resultFrom];
        let toRate = currency.rates[resultTo];
        let convertedValue = ((toRate / fromRate) * searchValue).toFixed(2);
        finalValue.textContent = convertedValue + ' ' ;
        finalAmount.style.display = "block";
    } 
    
    else{
        alert("Conversion rates for the selected currencies are not available.");
    }
}

function clearVal(){
    search.value = '';
    fromCurrency.selectedIndex = 0;
    toCurrency.selectedIndex = 0;
    finalValue.textContent = '';
    finalAmount.style.display = "none";
}
//Created by Khushi
