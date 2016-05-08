// // ### Definition

// // a closure is the local variables for a function — kept alive after the function has returned, or
// // a closure is a stack-frame which is not deallocated when the function returns (as if a 'stack-frame' were malloc'ed instead of being on the stack!).


// // The Counter Dilema
// var counter = 0;

// function addGlobal() {
//     return counter += 1;
// }

// // #### First Stop ---
// (function(){console.log("STOP-1...")})()

// // execute
// // addGlobal();
// // addGlobal();
// // addGlobal();













// function addLocal() {
//     var counter = 0;
//     return counter += 1;
// }

// // #### Second Stop ---
// (function(){console.log("STOP-2...")})()
















// function addWithFunction() {
//     var counter = 0;
//     function plus() {counter += 1;}
//     plus();
//     return counter;
// }

// // #### Third Stop ---
// (function(){console.log("STOP-3...")})()











// var addClosure = function () {
//     var counter = 0;
//     return function (){return counter += 1;};
// };

// // #### Forth Stop ---
// (function(){console.log("STOP-4...")})()












// // Closure + Self invoking function to provide encapsulation
// var add = (addClosure)();
// var addAnonymous = (function () {
//     var counter = 0;
//     return function (){return counter += 1;};
// })();

// // #### Fith Stop ---
// (function(){console.log("STOP-5...")})()












// // Closure for private variables + inheritance
// function AddIt(){
//   var counter = 0;

//   this.addOne = function(){
//     return counter += 1;
//   }
// }

// // #### Fith Stop ---
// (function(){console.log("STOP-5...")})()

// // var instance = new AddIt()
// // instance.counter()
// // instance.addOne()
// // instance.counter()







// // Animation in the global scope
// // var elem = document.getElementById('move1');
// // var tick = 0;
// // var timer = setInterval(function(){
// //   if (tick < 100){
// //     elem.style.margin = tick+"px";
// //     tick++;
// //   }else{
// //     clearInterval(timer);
// //   }
// // }, 10)

// Encapsulation in closure
// function animateIt(elementId){
//   var elem = document.getElementById(elementId);
//   var tick = 0;
//   var timer = setInterval(function(){
//     if (tick < 100){
//       elem.style.padding = tick+"px";
//       tick++;
//
//       console.log(elementId)
//       console.log(tick)
//     }else{
//       clearInterval(timer);
//     }
//   }, 10)
//
//   return console.log("I should have stop by now")
// }
//
// // Closures retain state of variables, is not a snapshot of the function
// // Execution
//
// animateIt('move1');
// animateIt('move2');
//
// setTimeout(function(){
//   animateIt('move3')
// }, 3000);






// // ### OTHER USES OF CLOSURES ###
// // Binding function context
// // Partially applying functions - prefill arguments in a functions before executing
// // Overriding functions behavior
// // Library wrapping
// // Immediate functions - Temporary scopes and private variables