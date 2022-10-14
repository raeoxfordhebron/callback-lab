// Follow the following steps:
// Create a function that takes a parameter and logs it
// Create a second function that logs 'hi'
// Invoke the first function, passing in the second function as a parameter
// You should see a function reference being logged
// Alter the first function so that it invokes its parameter
// If you did these steps correctly, you should get a log of 'hi'

const aCallBack = (x) => {
    console.log(x)
    x()
}

const sayHello = (greeting) => {
    console.log("hi")
}

aCallBack(sayHello)

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (x) => { 
//     console.log(x);
// }

// foo(bar, 'hi');

const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

const baz = (param) => {
    console.log(param.toUpperCase());
}

foo(baz,'hello')

foo(bar, 'hi');

// Write a function electricMixerthat takes one parameter named attachment. The electricMixerfunction should console log "This mixer is now: " plus the return value of the attachment.
// Invoke electricMixerusing an anonymous function as the argument. The return of the anonymous function should be a string that says: "spiralizing".


const electricMixer = (attachment) => {
    console.log("This mixer is now:" + attachment)
}

electricMixer(() => {
    return "spiralizing";
})


// Write an electricMixer function and write a new attachment for the mixer. Get your electric mixer to use the attachment.

const spiralizer = () => {
    return "spiralizing"
}

electricMixer(spiralizer);

const slicerDicer = () => {
    return "slicin' and dicin'"
}

electricMixer(slicerDicer)

// let count = 0; 

// Use SetInterval to display a number that increases by 1 each second (it's a clock!)

// setInterval(() => {
//     console.log(count)
//     count+= 1;
// }, 1000)

// Create a function called wordReversethat reverses a string.

const wordReverse = (string) => {
 const splitString = string.split("")
 const reverseString = splitString.reverse()
 const joinString = reverseString.join("")
    console.log(joinString)
}

wordReverse("Hello and Goodbye")

// Create a function called toUpperCase that capitalizes every letter in a string.

const toUpperCase = (string) => {
 const upperString = string.toUpperCase()
 console.log(upperString)
}

toUpperCase("Word")

// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMastershould take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!'concatenated to it.

const repMaster = (input, func) => {
    func(input);
}

repMaster("Never give your heart to a blockhead", toUpperCase)

// We need a .countmethod and we need you to write it! The method should take an array and count how many elements are the same in that array, returning that number. hint: remember to make an array that has duplicate elements!!

const countMethod = (arr) => {
    // indexOf is going to give you the first | lastIndexOf gives you the last index
    let counter = 0
    for(number of arr){
        if(arr.indexOf(number) !== arr.lastIndexOf(number)){
            counter += 1;
        }
    } console.log(counter)
}
        

countMethod([0, 1, 2, 3, 3, 3, 3])

// Write a .uniquemethod that creates a new array out of all the unique values in an array.


