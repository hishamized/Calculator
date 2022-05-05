let box1; 
let box2;
let num1;
let num2;
let ans;
let clear;
function addition(){ 
    box1 = document.getElementById("screen1").value;
    box2 = document.getElementById("screen2").value;  
    num1 = parseInt(box1);
    num2 = parseInt(box2);
    ans = num1 + num2;
    document.getElementById("screen3").value = ans;
}
function subtraction(){
    box1 = document.getElementById("screen1").value;
    box2 = document.getElementById("screen2").value;  
    num1 = parseInt(box1);
    num2 = parseInt(box2);
    ans = num1 - num2;
    document.getElementById("screen3").value = ans;
}
function mmultiplication(){
    box1 = document.getElementById("screen1").value;
    box2 = document.getElementById("screen2").value;  
    num1 = parseInt(box1);
    num2 = parseInt(box2);
    ans = num1*num2;
    document.getElementById("screen3").value = ans;
}
function division(){
    box1 = document.getElementById("screen1").value;
    box2 = document.getElementById("screen2").value;  
    num1 = parseInt(box1);
    num2 = parseInt(box2);
    ans = num1/num2;
    document.getElementById("screen3").value = ans;
}
function power(){
    box1 = document.getElementById("screen1").value;
    box2 = document.getElementById("screen2").value;  
    num1 = parseInt(box1);
    num2 = parseInt(box2);
    ans = Math.pow(num1, num2);
    document.getElementById("screen3").value = ans;
}
function clean(){
    clear = "";
    document.getElementById("screen1").value = clear;
    document.getElementById("screen2").value = clear;
    document.getElementById("screen3").value = clear;
}
function exitCal(){
    window.location.href = 'http://hishamized.ddns.net/';
}
function maxWindow() {
    document.getElementById("calculator").style.width = "60%";
}
function minWindow() {
    document.getElementById("calculator").style.width = "";
}