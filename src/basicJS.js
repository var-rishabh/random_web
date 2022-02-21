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

// ==================================================================================================================================================================


// types of loop

for (var i = 0; i < Languages.length; i++) {
    // console.log(Languages[i]);
}

for (var lang of Languages) {                                  // "of" for arrays or characters and "in" for objects
    // console.log(lang);
}

function print(element) {
    // console.log(element);
}

Languages.forEach(lang => {
    // console.log(lang);
});

Languages.forEach(print);                                           // alternative of code line 16 - 18 

var x = Numbers.map(function(num) {                                      // retuns an array of mapped elements
    return num*4;
})

Movies.forEach(function(movie) {                                    // forEach loop to iterate over Object
    // console.log(`${movie.Title} (${movie.Year})`);
})


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
    print() {
        console.log(`Final Value : ${this.value}`);                // "this" keyword refer to the object at the left of the ".", not to the window object    
        // console.log(this);       
    }
};


// ==================================================================================================================================================================