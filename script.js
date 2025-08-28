const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValue() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    if (isNaN(inputCurrencyValue) || inputCurrencyValue < 0) {
        currencyValueConverted.innerHTML = "";
        return;
    }

    const dolarToday = 5.20;
    const euroToday = 6.20;
    const libraToday = 7.31;
    const bitcoinToday = 603455.28;

    const selectedCurrency = currencySelect.value;

    // Converte o valor baseado na moeda selecionada
    let convertedValue;
    if (selectedCurrency === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    } else if (selectedCurrency === "euro") {
        convertedValue = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    } else if (selectedCurrency === "libra") {
        convertedValue = inputCurrencyValue / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue);
    } else if (selectedCurrency === "bitcoin") {
        convertedValue = inputCurrencyValue / bitcoinToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"; 
        currencyImage.src = "./assets/estados-unidos (1) 1.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"; 
        currencyImage.src = "./assets/Design sem nome 3.png"; 
    } else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra"; 
        currencyImage.src = "./assets/libra.png";
    } else if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"; 
        currencyImage.src = "./assets/bitcoin 1.png";
    }

    convertValue(); // Chama a função de conversão ao mudar a moeda
}

// Adiciona os listeners aos botões
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);
 