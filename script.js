

function alertButton() {
    alert("cargando ventana")
}

var cookieBox = document.querySelector("#footerId");
var element = document.getElementById("footerId")

function removeCookies() {

    element.remove();
}


function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);

}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));

}

function convert(element) {
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "ºC"){
            tempSpan.innerText = (f2c(tempVal));
        }
        else{
            tempSpan.innerText =(c2f(tempVal));
            

        }
        


    }

}

