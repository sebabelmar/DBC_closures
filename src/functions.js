// Execute funcs
window.onload = funcs;

function funcs() {

	// Functions are first class-objects
	var definition = {
		1: '',
		2: '',
		3: '',
		4: ''
	};












	//####  Literals + Definitions

	function func0() {return "Created via literals. -I'm a function with name."}

	var func1 = function() {return "Can be assigned to Variables. -I'm an anonymous function."};

	var func2 = function lastName() {return "-I'm an function witn name in a variable."};


	// Executables:
	// func0.name
	// func0()
	// func1.name
	// func1()
	// func2.name
	// lastName()
	// func2()























	//####  Functions can be arrays elements

	var arrayOfVariables = [
		"Can be assigned to Array entries",
		function() {console.log("Index 1")},
		function() {alert("Index 2")},
		function() {return ("Index 3")}
	];

	// Executables:
	// Look into the properties and functions of an array on the console by doing 'arrayOfVariables.'

	// var blockOfCode = function(element) {
	// 	if(typeof element == "function")
	// 	{element();}
	// };
	// arrayOfVariables.forEach(blockOfCode};

	// In Ruby
	// arr.each do |x|
	//      x**2
	// end

	// arr.each {|x| x**2}




















	//####  Functions values of the property of an object:

	var invokeMeAsAMethod = function() {
		console.log("From invokeMeAsAMethod.");
		return this
	};

	// This is an Object literal
	var objectWithFunctions = {
		string: "Im a String :P ",
		funcInObject1: function() { console.log("Yep, I'm executable from the object.") },
		funcInObject2: function someName() { console.log("Yep, I'm executable from the object.") },
		method: invokeMeAsAMethod
	};

	// Executables:
	// objectWithFunctions.string
	// objectWithFunctions.funcInObject1.name
	// objectWithFunctions.funcInObject2.name
	// objectWithFunctions.funcInObject1()
	// objectWithFunctions.funcInObject2()
	// invokeMeAsAMethod()
	// invokeMeAsAMethod().func0()
	// objectWithFunctions.method()
	// objectWithFunctions.method().func0()
	// objectWithFunctions.method().funcInObject2()















	// Functions can allow Object Oriented Programing
	// Functions that you can be instantiated
	function Construct(a) {

		// Properties:
		this.instanceVariable1 = a;

		// attr_accessor kind of thing
		this.get = function() {return this.instanceVariable1};
		this.set = function(value) {
			this.instanceVariable1 = value;
			return this.instanceVariable1
		};


		// Methods:
		this.method1 = invokeMeAsAMethod;
	}

	Construct.prototype.otherMethod = function() {console.log('I live in the prototype!!')};

	var constructed = new Construct("Im the value of the property.");



	// Executables:
	// constructed.instanceVariable1
	// constructed.get();
	// constructed.set("New value");
	// constructed.get();
	//
	// //Analyze this in this context
	// constructed.method1();
	//
	// // Talk about Prototype. 'Say WHAAAAA'... go read : https://en.wikipedia.org/wiki/Prototype-based_programming
	// constructed.otherMethod();



	// #### First Stop ----
	(function() {console.log("STOP-1...")})();



















	// #### Can be passed as Arguments to functions

	
	var functionArgument = function() {console.log("I got printed by being passed as an Argument")};

	var stringArgument = function() { return "I got printed by being passed as String"};




	// Setting parameters in definitions aka function signatures
	function functionAsArgument(functionAsParameter) {
		functionAsParameter();
	}

	function functionAsArgumentButExecuted(string) {
		console.log(string);
	}

	// #### Second Stop ----
	(function() {console.log("STOP-2...")})();


	// Executables:
	// functionAsArgument(functionArgument);
	// functionAsArgumentButExecuted(stringArgument());
	// functionAsArgument(function(){alert("whaaat???")})


















	// #### Can be returned as values from functions

	function returnfunction() {
		return function() {console.log("Executeme twice ;) ")}
	}

	// #### Third Stop ---
	(function() {console.log("STOP-3...")})();

	// Executables:
	// toExecute = returnfunction()
	// returnfunction()()



















	// #### Can process properties that can be dynamically created and assigned

	function addProperties() {
		return !addProperties.myProperty ? "Got no property" : addProperties.myProperty
	}

	// #### Fourth Stop ---
	(function() {console.log("STOP-4...")})();

	// Executables:
	// addProperties()
	// addProperties.myProperty = "Heck Yeah!!"

}
