dailyMenu();

function dailyMenu(){

var dailyImage = [];
dailyImage[0] = {src:"Worksheet.jpg", caption:"Coursework Logo", href:"http://www4.rgu.ac.uk/prospectus/modules/disp_moduleView.cfm?Descriptor=ENM500&Revision=1"};

var today = new Date();
var day = Math.floor(today/8.64e7);

console.log("today is: " + today);
console.log("day is: " + day);

var dailyNr = day % dailyImage.length;

console.log("dailyNr is: " + dailyNr);
console.log(dailyImage[dailyNr].src);
console.log(dailyImage[dailyNr].href); 

var imgSource = dailyImage[dailyNr].src;
var hrefSource = dailyImage[dailyNr].href;

$("#recepi-of-the-day-img").attr("src", imgSource);
$("#recepi-of-the-day-img").attr("href", hrefSource);

document.getElementById("recepi-of-the-day-img").src = imgSource;
document.getElementById("dailyLink").href = hrefSource;
}
