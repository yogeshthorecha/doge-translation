var inputTxt = document.querySelector("#txt-input");
var btn = document.querySelector(".btn");
var outputbox = document.querySelector(".output-box");

var serverUrl = "https://api.funtranslations.com/translate/doge.json";
function funtranslations(input){
    return  serverUrl + "?" + "text=" + input;
}
function errorHandler(error){
    console.log("error occured = "+error)
    alert("error occured!! server is busy right now please try again after sometime");
}
btn.addEventListener("click",function clickhandler(){
     
        console.log(inputTxt.value);
        fetch(funtranslations(inputTxt.value))
        .then(response => response.json())
        .then(json => { contents = json.contents.translated;
        outputbox.innerText = contents;
        })
        .catch(errorHandler)
});
