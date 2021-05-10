var request = new XMLHttpRequest();
var adress = "https://raw.githubusercontent.com/danieltrancozo/portfolio-alfa.github.io/main/textos.json";
var info;
request.open('GET', adress, true);
request.onload = function() {
    info = JSON.parse(request.responseText);
    console.log(info);
    peek(0);
}