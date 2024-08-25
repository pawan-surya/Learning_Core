console.log(a) // when the vaeriable is temproral dead zone you can access it 
let a = 10;
var c = 100;


setTimeout(function () {
    console.log("timer")
},5000) //5 second

function x(y) {
    console.log("x")
   return y();
}
x(function y() {
    console.log("y")
});

// what is a callback function in java script
// javascript is a sysnchronus and single -threaded language
// blocking the main thread 
// power of callbacks?
// deep about event listener
//closer demo with event listener
//scope demo with event listener
// garbage collection and removeEventlistener