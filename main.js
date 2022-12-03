var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector('#txt-input'); 
var outputDiv = document.querySelector('#output');
var serverURL = "https://api.funtranslations.com/translate/sindarin.json"


function errorHandler(error) {
    console.log("An error occured");
    outputDiv.innerText = "An error occured. Please try again after an hour.";
}

function getTranslationURL(test) {
    return serverURL + "?" + "text=" + test
}

function clickEventHandler() {
    fetch(getTranslationURL(textInput.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(translatedText);
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);