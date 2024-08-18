/*

    numbers
    string
    arrays
    objects
    booleans
    null
    undefined

    number = 1, 2,599, etc;
    strings = "I am a boy", "5000"
    booleans = true or false;
    objects = {
        name - key: "Ball" - value,
        length: "200cm",
        color: "Blue",
        use: {
            first_use: {},
            second_use: "Playing basket"
        }
    }1, 68, 67,
    arrays= ["blue", 1, true, "green"];


    var, let, const
    plus or concatination = +
    minus = -
    >
    <
    =
    %
    *
    data types
    var
    let 

    const
    /
*/ 
"i have been accepted into the unversity";


// countryList = ["France", "germany", "italy", "england"]

// const nigeria ='Nigeria is a country, it is located in africa. The citizens are called nigerians. The currency is NGN';
// const nigeriaObject = {
//     name: "Nigeria",
//     continent: "Africa",
//     citizen: 'Nigerians',
//     capital: "Abuja",
//     currency: "Naira",
//     currencyShort: "NGN"
// }
// console.log(countryList); calculator app, todo list app;
var a = "I am the hulk";
var z = "but i am a gentle man";
var b = "Simby goes to school";
var c = "Parcific ocean is the largest ocean";
var e = "Ronaldo is the real the goat";
var d = "Spain won the Euro 2024";
var t = " today's  date "
// bodmas modulus
// var answer = d + (b - c) / b * e; concatination
// var answer = t.split("");

/*
1. concatenation 
2. substr()
3.String length
String charAt() String at()
String charCodeAt()

String [ ]
String slice() String substr() String substring()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

*/ 


/*

Object.keys(nigeriaObject) - get all the keys of an object
Object.values(nigeriaObject) - get all the values of each object property

*/ 
const nigeria = {
    name: "Nigeria",
    continent: "Africa",
    citizen: 'Nigerians',
    capital: "Abuja",
    currency: "Naira",
    currencyShort: "NGN"
} 

nigeria.id = "123456"



nigeria.president = "Bola Ahmed tinubu";
nigeria.rivers = ["Niger", "Benue"];


/*
    array.length
    array.push  // add an item to the last postion in array
    array.pop   // remove an item from the last postion in array
    array.shift  // remove an item from the initial postion in array
    array.unshift // add an item to the initial postion in array
    array.toString; //converts the array into string
    array.indexOf //find the current postion of that item
*/ 

delete nigeria.id;
let bola = "Bola"

let countryList = ["algeria", "nigeria", "ghana", "benin", "DRC", "South Africa", "Cote d'voire"];



let answer = countryList.pop();

console.log(countryList);




// const countryList = 

const country1 = "Algeria"
const country2 = "Nigeria"
const country3 = "Ghana";
const nigeriaNum = 1960;
true
false
1234567847446



var tunde = "A boy";// defines a constant value that can be changed
let iyanu = "A girl"; // defines a constant value that can be changed
const babtunde = "A man"; // defines a constant value that cannot be changed
const bag = null;
const va = false

iyanu = {
    name: "Ayo"
}

let monday = {
    name: "monday",
    characterized: "it is a busy day of the week",
    motto: "No slumber"
}


// numeric opertions

// let a = 40;
// let b = 35;
// const d = 39;
// let e = 20;

// let f = e >= a
// let c = a - b


//////////Array and objects manipulations///////////
const ngeria = {
    name: "Nigeria",
    continent: "Africa",
    Languages: ["Igbo", "yoruba", "hausa"],
    latitude: "",
    longitude: "",
    landMass: "60, 000 sq kilometers",
    president: "President Bola Ahmed Tinubu",
    getValue: (value) => {
        return nigeria[value]
    } 


}

const ourArray = ["name", "table", 1, 24, {age: 50}, true, null, true, "table", false,];
const secondArray = [];
const random = [10, 7, 8, 36, 78, 4]
//array.indexOf is used to determine the location or index of an array;
//array.length gives the total value in our array;
//array.pop removes the last element or value from an array;
//array.push adds a value to the last of the array
//array.shift removes the first element or value from an array;
//array.unshift add the first element or value from an array;
//array.sort helps to arrange the values in orderly manner;
//array.find will return one element with the specified value;
//array.fillter will return an array of elements with the specified value
//array.some will return true if the requirement is met by a single value else return false if not no value or element meets the condition;
//Even though array.map and array.forEach iterate the items in an array, the difference is that array.map will return a new array that contain the new changes and will not affect the inital array, while forEach will never return a value.....

secondArray.length = 10;
secondArray[8] = "boy";
// ourArray.unshift("new age");

const thisArray  = ourArray.map((item, index) => {
    const obj = {
        name: item
    }
    item = "baba"
    return obj;
})
// console.log("Keys of the object", ourArray, thisArray);


/////////////////functions////////////////////////////
//a function in javascript is a statement of a section of code that allows us to perform certain action
//arrow function is a shorthand method of writing a function
var a = 2;
var b = 6;

var c = a + b;
// function addNumber(a, b){
//     var a = "boy";
// }

let cab = "book"
cab = "biro";

// const addNumber = function(a, b){
//     return a + b;
// }

const addNumber = (a, b) => {
    return a + b;
}

const calulateDiscount = async (price = 10000, discount = 10) => {
    const dispcountPrice =  discount/100 * price;
    const logged = await logger()
    console.log(logged);
    
    console.log(price - dispcountPrice);
}

const logger = async () => {
    setTimeout(() => {
        console.log("i am waiting");
    }, 2000)

    return "i am waiting asynchronously"
}   


/*
    0-4 = 0
    5-9 = 1
*/ 

const generateRandomNumber = (defNum = 10) => {
    let value = Math.round(Math.random() * defNum);
    return value;
}

const customerPrice = calulateDiscount(12000, 20);
// console.log(customerPrice);




function doSomething2(content = "man"){
    // console.log("1");
    return `I am a ${content}`
}

const doSomething = function(content = "man"){
    // console.log("2");
    
    return `I am a ${content}`;
}

const arrangeOut = () => {
    setTimeout(() => {
        // console.log("2");
   }, 5000);
}

const myArrowFunction = async (content = "man")  => {
    // console.log("1");
    await arrangeOut();
    // console.log("3");
    return `I am a ${content}`;
}
 
const myArrowFunction2 = (content = "man")  => `I am a ${content}`;

const myFunc = (item) => item * 45;

// console.log("do something", myFunc(5));\
// doSomething();
// doSomething2();
myArrowFunction()




// doSomething();

// console.clear();