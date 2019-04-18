var first;
var last;


function male(){
   
    first = document.querySelector(".iptOne").value;
console.log(first);
    last = document.querySelector(".iptTwo").value;
console.log(last);
 var full = first + last;
 var toUpper = full.toUpperCase();
var maleNames = ["sergeant","corpral","private","airman","seaman","captain","brigadier","general","commander","lieutenant commander"];
var math = Math.floor(Math.random()*10);
var random = maleNames[math];
var toUpper1 = random.toUpperCase();
switch(full){
    case 'papabubbles': alert("Private Bubbles!!!!");
    break;
    default:  document.querySelector(".target").innerHTML = toUpper1 + " " +toUpper ;
}
}
function female(){
   first = document.querySelector(".iptOne").value;
console.log(first);
   last = document.querySelector(".iptTwo").value;
console.log(last);
var full1 = first + last;
var toUpper = full1.toUpperCase();
var femaleNames = ["ms.petty officer","ms.captain","ms.brigadier","ms.colonel","ms.major","ms.admiral","ms.general","ms.ensign","ms.lieutenant colonel","ms.vice admiral"];
var math1 = Math.floor(Math.random()*10);
var random = femaleNames[math1];
var toUpper2 = random.toUpperCase();
switch(full1){
   case 'mamabubbles': alert("Private Bubbles Wife!!!!");
    break;
    default:  document.querySelector(".target").innerHTML =toUpper2  + " " +toUpper ;
    
}
}