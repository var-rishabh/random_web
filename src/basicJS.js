// types of loop
const languages = ["Arabic", "Bengali", "Chinese", "Dutch", "English", "French", "German", "Hindi", "Italian", "Japanese", "Korean", "Latin", "Mongolian", "Nepali", "Osmanian", "Polish", "Quechua", "Russian", "Swedish", "Turkish", "Ukrainian", "Vietnamese", "Welsh", "Xhosa", "Yakub", "Zulu"]

// for (var i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// for (var lang of languages) {                                  // "of" for arrays or characters and "in" for objects
//     console.log(lang);
// }

function print(element) {
    console.log(element);
}

// languages.forEach(lang => {
//     console.log(lang);
// });

// languages.forEach(print);                                         // alternative of code line 16 - 18 


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