        // Task 1
function power(num, pow) {
    var result = 1;
    if(pow == undefined)
        pow = 2;
    for(var i=1; i<=pow; i++) {
    result = result * num;
    }
    return result;
}
console.log("Task 1 answer: "+ power(2,3));

        // Task 2
function LeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log("Task 2 asnwer "+year + ' is not a leap year');  
}
}
LeapYear(2014);

// Task 3
function triangle(a,b,c){
    var  S = ( a + b + c ) / 2;
    var area =S*(S-a)*(S-b)*(S-c);
    console.log( "Task 3 asnwer "+area+" is areaa of tringle");
}
triangle(2,4,8);

// Task 4
console.log("task 4 answer")
function MainFunc(sub1,sub2,sub3){
    console.log("Percentage: "+percent(sub1,sub2,sub3));            
    console.log("Average: "+average(sub1,sub2,sub3));            
}
function percent(sub1,sub2,sub3){
    var marksAdd = sub1+sub2+sub3;
    const marksTotal = 300;
    markspercent = (marksAdd/marksTotal)*100;
    return markspercent;
}
function average(sub1,sub2,sub3){
    const totalSub = 3;
    var avr = (sub1+sub2+sub3)/totalSub;
    return avr;
}
var mark1 = parseInt(prompt("Enter marks of subject 1"));
var mark2 = parseInt(prompt("Enter marks of subject 2"));
var mark3 = parseInt(prompt("Enter marks of subject 3"));
MainFunc(mark1,mark2,mark3);

// Task 5
console.log("Task 5 answer");
let str = "talha";
let find = "a";
function FindIndex(){

    var strArr = str.split('');
    console.log(strArr);
    if(strArr.includes(find)){

        console.log("yas")
    }
    else{
        console.log("no");
    }
}

// Task 6
console.log("Task 6 answer");
function removeVowel(str1){
var vowel = [ 'a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ];
var consonant = "";

for(var i = 0; i < str1.length; i++){
 
    if (!vowel.includes(str1[i])){
        consonant += str1[i];
    }
    }
    return consonant;
}
var str1 = "Sylani Mass IT Training";
console.log(removeVowel(str1));

// Task 7
console.log("Task 7 answer");
function findOccurrences() {
var str = "Sylani Mass IT Trainging";
var chars = str.toLowerCase().split("");
var count = 0;
for(let i = 0; i < chars.length - 1; i++) {
     var char = chars[i];
var next = chars[i + 1];
if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
    count++
    }
}

return count;
}
function isCorrectCharacter(char) {
switch (char) {
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
return true;
default:
return false;
}
}
var found = findOccurrences();
console.log(found);

// Task 8
console.log("Task 8 answer");
function meter(km){
var Meter = km*1000;
return Meter
}
function feet(km){
var feet = km*3280.84;
return feet
}
function inch(km){
var inches = km*39370.1;
return inches
}
function answer(a){
console.log(a+" KM "+" = "+meter(kmVal)+" meters");
console.log(a+" KM "+" = "+feet(kmVal)+" feet");
console.log(a+" KM "+" = "+inch(kmVal)+" inches");
}
var kmVal = parseInt(prompt("Enter value in Kilometers"));
console.log(answer(kmVal));

// Task 9
console.log("Task 9 answer");
function overtime(){
var hourWork = parseInt(prompt("How many hours you have worked?"));
var overtime = hourWork-40;
var pay = overtime*12;
console.log("Your overtime pay is: "+pay);
}
overtime();

// Task 10
console.log("Task 10 answer");
function cash(amount){
var hundred = parseInt(amount / 100);
var fifty = parseInt((amount % 100) / 50);
var ten = parseInt((((amount % 100) % 50) / 10));
var remain = parseInt((((amount % 100) % 50) % 10));
var result = hundred+" hundred notes, "+fifty+" 50 notes, "+ten+" 10 notes"+" and remaining will be: "+remain;
return result;
}
var howMuch = parseInt(prompt("How much amount you want to withdraw?"));
console.log(cash(howMuch));