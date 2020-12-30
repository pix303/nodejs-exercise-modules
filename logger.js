var loggerUrl = "http://loggerService/log";

function log(message) {
	console.log("sending to " + loggerUrl + " this message: " + message)
}

module.exports.log = log;