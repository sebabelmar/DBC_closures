// Execute funcs
window.onload = funcs;

function funcs() {

    // Functions are first class-objects

    //####  Literals + Definitions
    function func0() {return "Created via literals. -I'm a function with name."}

    // Define as variables, array entries, or object properties:
    var func1 = function() {return "Can be assigned to Variables. -I'm an anonymous function."};

    var func2 = function lastName() {return "-I'm an function witn name in a variable."};

    var arrayOfVariables = [
                            "Can be assigned to Array entries",
                            function(){console.log("Index 1")},
                            function(){alert("Index 2")},
                            function(){return ("Index 3")}
                           ];

    var invokeMeAsAMethod = function(){return this};

    var objectWithFunctions = {
        funcInObject1: function(){console.log("Yep, I'm executable from the object.")},
        funcInObject2: function lastName(){console.log("Yep, I'm executable from the object.")},
        method: invokeMeAsAMethod
    };

    // Functions can allow Object Oriended Programing
    function Construct (){
        this.method1 = invokeMeAsAMethod
    }

    Construct.prototype.otherAttr = function() { return "attr";}

    var constructed = new Construct();

    (function(){console.log("STOP-1...")})()
    // #### First Stop ---

    // #### Can be passed as Arguments to functions
    var functionArgument = function(){console.log("I got printed by being passed as an Argument")};

    var stringArgument = function(){ return "I got printed by being passed as String"};

    // Setting parameters in definitions aka function signatures
    function functionAsArgument(functionAsParameter){
        functionAsParameter();
    }

    function functionAsArgumentButExecuted(string){
        console.log(string);
    }

    (function(){console.log("STOP-2...")})()
    // #### Second Stop ---


    // #### Can be returned as values from functions
    function returnfunction(){
        return function(){console.log("Executeme twice ;) ")}
    }

    (function(){console.log("STOP-3...")})()
    // #### Third Stop ---

    // #### Can process properties that can be dynamically created and assigned
    function addProperties() {
        return !addProperties.myProperty ? "Got no property" : addProperties.myProperty
    }

    (function(){console.log("STOP-4...")})()
    // #### Fourth Stop ---

};

// Executables

// #### First Stop ----
// func0.name
// func0()
// func1.name
// func1()
// func2.name
// lastName()
// func2()
// arrayOfVariables.forEach(function(inx){
//     if(typeof inx == "function"){
//         inx();
//     }
// };

// In Ruby
// arr.each do |x|
//      x**2
// end

// objectWithFunctions.funcInObject1.name
// objectWithFunctions.funcInObject2.name
// objectWithFunctions.funcInObject1()
// objectWithFunctions.funcInObject2()
// invokeMeAsAMethod()
// invokeMeAsAMethod().func0()
// objectWithFunctions.method()
// objectWithFunctions.method().func0()
// objectWithFunctions.method().funcInObject2()

// #### Second Stop ----
// functionAsArgument(functionArgument);
// functionAsArgumentButExecuted(stringArgument());
// functionAsArgument(function(){alert("whaaat???")})

// #### Third Stop ----
// toExecute = returnfunction()
// returnfunction()()

// #### Fourth Stop ---
// addProperties()
// addProperties.myProperty = "Heck Yeah!!"