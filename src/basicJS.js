"use strict"

const Languages = ["Arabic", "Bengali", "Chinese", "Dutch", "English", "French", "German", "Hindi", "Italian", "Japanese", "Korean", "Latin", "Mongolian", "Nepali", "Osmanian", "Polish", "Quechua", "Russian", "Swedish", "Turkish", "Ukrainian", "Vietnamese", "Welsh", "Xhosa", "Yakub", "Zulu"]

const Movies = [
    { Title : "Captain America : The First Avenger", Rating : 6.9, Year : 2011, Gross : 176 },
    { Title : "Captain Marvel", Rating : 6.8, Year : 2019, Gross : 426 },
    { Title : "Iron Man", Rating : 7.9, Year : 2008, Gross : 318 },
    { Title : "Iron Man 2", Rating : 6.9, Year : 2010, Gross : 312 },    
    { Title : "The Incredible Hulk", Rating : 6.6, Year : 2008, Gross : 135 },    
    { Title : "Thor", Rating : 7, Year : 2011, Gross : 181 },    
    { Title : "The Avengers", Rating : 8, Year : 2012, Gross : 623 },    
    { Title : "Iron Man 3", Rating : 7.1, Year : 2013, Gross : 409 },    
    { Title : "Thor : The Dark World", Rating : 6.8, Year : 2013, Gross : 206 },    
    { Title : "Captain America: The Winter Soldier", Rating : 7.7, Year : 2014, Gross : 259 },    
]

const Numbers = [11,22,33,44,55,66,77,88,99]

const User = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    birthYear: 2001,
    bio: "Stiident"
}

// ==================================================================================================================================================================


// types of loop

// for (var i = 0; i < Languages.length; i++) {
//     console.log(Languages[i]);
// }

// for (var lang of Languages) {                                  // "of" for arrays or characters and "in" for objects
//     console.log(lang);
// }

// function print(element) {
//     console.log(element);
// }

// Languages.forEach(lang => {
//     console.log(lang);
// });

// Languages.forEach(print);                                           // alternative of code line 16 - 18 

// var x = Numbers.map(function(num) {                                      // retuns an array of mapped elements
//     return num*4;
// })

// Movies.forEach(function(movie) {                                    // forEach loop to iterate over Object
//     console.log(`${movie.Title} (${movie.Year})`);
// })


// ==================================================================================================================================================================


// creating methods and "this" keyword
const myMath = { 
    value : 1,
    square: function (num) {
        return num*num;
    },
    cube(num) {                                                    // loca.cube(value)
        return num*num*num;
    },
    type:function () {
        return `Final Value : ${this.value}`;                // "this" keyword refer to the object at the left of the ".", not to the window object
    },                                                       
    shout: function () {
        setTimeout(() => {                                   // but "this" keyword refers to window object when used in arrow function
            console.log(this.type())
        }, 3000);
    }    
};


// ==================================================================================================================================================================



// ES6 -- Map, Filter, Arrow Function, Default Parameters and ForEach

// setTimeout(() => {                                                  // for single time
//     console.log("Hello world!");
// }, 2000);  

// let num = 0;
// const id = setInterval(() => {                                      // for infinite interval
//     if (num == 6) {
//         clearInterval(id);
//     };
//     console.log(num);
//     num += 1;
// }, 500)


const x = Movies.filter(m => m.Rating < 7 )                           // filter selected object items
const y = Movies.filter(m => m.Rating > 7 ).map(m => m.Title.toUpperCase())

Numbers.every(num => num < 50);                                       // condition on every element must be true
Numbers.some(num => num < 50);                                        // condition on one element must be true

const solo = Movies.reduce((min, num) => num.Rating < min.Rating ? num : min);          // return only single element


// Spread (...)
Math.max(...Numbers)
// console.log(..."rishabh")           // these both are same
// console.log("r", "i", "s", "h", "a", 'b', "h") 

const all_data = [1, 2, 3, ...Numbers, ...Languages, "Super Duper"];        // same can be done with objects
var new_array = [..."radioacitve"];


// REST parameters
function sum1(...nums) {
    return nums.reduce((total, ele) => total + ele);
}
var sum2 = (...nums) => (nums.reduce((total, ele) => total + ele))


// destructing
var [uae, westBengal, ...other] = Languages;                    // Array

var { firstName, lastName : surName, death = "N/A"} = User;     // Object

Movies.filter(({ Gross }) => Gross > 300);



// ==================================================================================================================================================================



// DOM

// document.querySelector(".container").classList.add("roman");            // add a new class and did not delete the old one
// document.querySelector(".container").attributes("class", "roman");      // add a new class but delete the old one
// document.querySelector(".container").classList.toggle("roman");         // add and remove class_list


// pokedex
const contain = document.querySelector(".pokemons");
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for (let i = 1; i <= 200; i++) {
    const poke = document.createElement("div");
    const nImg = document.createElement('img');
    const data = document.createElement('span');
    data.innerText = `#${i}`;
    nImg.src = `${url}${i}.png`;
    contain.appendChild(poke);
    poke.appendChild(nImg);
    poke.appendChild(data);
}

// random color generation

const change = () => {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    return `rgba(${r},${g},${b})`;
}

const but = document.querySelector("button");
const h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//     this.style.color = change();
// })

but.addEventListener("click", () => {
    document.body.style.background = change();
});


// key press events

// window.addEventListener("keydown", function (e) {
//     console.log(e.key);
// })

// adding list items
// const data = document.querySelector("#data");
// const butS = document.querySelector("#sub");
// const list = document.querySelector("#listName");
// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();         // prevent changing to request page
//     var l = document.createElement("li");
//     l.innerText = data.value;
//     list.append(l);
// })

// deleting list items
// const liS = document.querySelectorAll("li");
// for (let li of liS) {                            // this removes only predefined li elements
//     li.addEventListener("click", function () {
//         li.remove();
//     })
// }

// list.addEventListener("click", function (e) {
//     e.target.nodeName === "LI" && e.target.remove();        // removes only li under ul not para nothing else...
// })

// data.addEventListener("change", function() {         // makes changes after shifting focus
//     h1.innerText = data.value;
// })

data.addEventListener("input", function() {             // makes changes in real time
    h1.innerText = data.value;
})


// Smooth scrolling
var scroll = setInterval(function() {
    window.scrollBy(0, 50)
}, 100);
clearInterval(scroll);

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}
console.log("%c Names: ", "color: orange; font-weight: bold");
console.log({Languages, Numbers});
console.table([Movies, Numbers]);