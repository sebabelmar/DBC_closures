// Trick to enable/disable funcs
// window.onload = scope;

function scope() {

  // scope 'a'
  var outNumber = 2;

  function addIt() {
    // scope 'b'
    parameterNumber = arguments[0];
    return parameterNumber * outNumber;
  }

  (function(){console.log("STOP-1...")})()
}











// We are in the global scope (window)
function globalControl (){return bueno}
bueno = "SI"




// Executables
// addIt(5)
// arguments[0]
// window.globalControl
// window.bueno