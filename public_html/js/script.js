var myPoint = 0;
var myUrl = "";
var portions, porosity;
var pageId = $("body").attr("id");
var text;
var gri;

$(document).ready(function () {
    $.get("include/header.html", function (data) {
        $("#header").html(data);
    });

    $.get("include/aside.html", function (data) {
        $("#aside").html(data);
    });

    $.get("include/footer.html", function (data) {
        $("#footer").html(data);
    });
});

function waterFunction() {
    var porosity = document.getElementById("porosity").value;
    var waterRe = document.getElementById("waterRe").value;
    var trueRe = document.getElementById("trueRe").value;
    var tortursity = document.getElementById("tortursity").value;
    document.getElementById("water").innerHTML = Math.sqrt((tortursity * waterRe) / (Math.pow(porosity, 2) * trueRe));
}

function densityFunction() {
    var matrix = document.getElementById("matrix").value;
    var bulk = document.getElementById("bulk").value;
    var fluid = document.getElementById("fluid").value;
    document.getElementById("density").innerHTML = ((matrix - bulk) / (matrix * fluid));
}

function sonicFunction() {
    var soniclog = document.getElementById("soniclog").value;
    var matrixlog = document.getElementById("matrixlog").value;
    var measurement = document.getElementById("fluid").value;
    document.getElementById("density").innerHTML = ((soniclog - matrixlog) / (measurement * matrixlog));
}

function shaleFunction() {
    var gammalog = document.getElementById("gammalog").value;
    var mingammalog = document.getElementById("mingammalog").value;
    var higgammalog = document.getElementById("higgammalog").value;
    document.getElementById("shale").innerHTML = ((gammalog - mingammalog) / (higgammalog * mingammalog));
}

window.onload = displayPortion(pageId);


function getLocalStorage(key) {
    if (typeof (window.localStorage) != 'undefined') {
        var options = window.localStorage.getItem(key);
    } else {
        throw "window.localStorage, not defined";
    }
    return options;
}

function setLocalStorage(key, value) {
    if (typeof (window.localStorage) != 'undefined') {
        window.localStorage.setItem(key, value);
    } else {
        throw "window.localStorage, not defined";
    }
}


