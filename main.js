//require a local module
const logger = require("./logger")
logger.log("ciao nodejs");

//explore current module
console.log("-----------------------------------");
console.log("this module is:");
console.log(module);
console.log("__filename", __filename);
console.log("__dirname ", __dirname);
console.log("-----------------------------------");


//test path module
const path = require("path");
let pathObj = path.parse('C:\\Users\\paolo\\Documents\\workspace\\ts\\pc\\nodejs\\nodejs-exercise-modules\\logger.js');
console.log(pathObj);
pathObj = path.parse(__filename);
console.log(pathObj);

//test OS module
const os = require("os");
console.log(`Total memory ${(os.totalmem() / 1024) / (1000 * 1000)} - Free memory ${(os.freemem() / 1024) / (1000 * 1000)}`);


//test event emmitter
const LoggerAsync = require('./logger-async');
const la = new LoggerAsync();
la.on("messageEmitted", (data) => console.log(data))
la.log("ciao node!");