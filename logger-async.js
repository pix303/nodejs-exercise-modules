const EventEmitter = require("events");

class LoggerAsync extends EventEmitter {

	log(msg) {
		console.log("just recived", msg);
		this.emit("messageEmitted", `this is the param ${msg}`);
	}
}

module.exports = LoggerAsync;