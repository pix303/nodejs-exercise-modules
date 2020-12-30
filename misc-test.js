function sayHello(name) {
	console.log("ciao " + name);
}

function testTimeout(name, age) {
	console.log("the name is:", name, "the age is", age)
}

function tellMeGlobalObject() {
	console.log("main global object is global", global);

	console.log("from global derive: setTimeout, setInterval, clearTimesout, clearInterval");
	console.log("- call handler with 1 second delay with parameters");
	setTimeout(testTimeout, 1000, "pix", 47);

	console.log("- call handler every 1 second with parameters and clear after 4 times");
	let interval = setInterval(testTimeout, 1000, "pix", 47);
	setTimeout(() => { clearInterval(interval) }, 5000);
}


//no global browser object 
try {
	console.log(window)
} catch (error) {
	console.log("no browser here, you are in nodejs")
}

sayHello("pix");
console.log("------------------------------------------------")

tellMeGlobalObject();
console.log("------------------------------------------------")

//view only in this module not global
var notGlobal = "not global";
console.log(notGlobal);
console.log(global.notGlobal);
console.log("------------------------------------------------")
