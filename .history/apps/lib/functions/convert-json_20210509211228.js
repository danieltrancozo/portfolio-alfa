function convert(a){
    var request = new XMLHttpRequest();
    var adress = a;
    var info;
    request.open('GET', adress, true);
    request.onload = function() {
        info = JSON.parse(request.responseText);
        console.log(info);
        return (info);
    }
}