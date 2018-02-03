function beginProcessing() {
	// Create deferred object & make sure it's going to be in scope
	var deferred = new $.Deferred();

	// Create our worker (just like before)
	var worker = new Worker('./Scripts/deferred.js');

	// Register the message event handler
	worker.addEventListener('message', function (e) {
		// simple messaging - if the worker is ready it'll send a message with READY as the text
		if (e.data === 'READY') {
			// No UI code
			// Progress notification
			deferred.notify('Worker started');
		} else if(e.data === 'COMPLETED') {
			// processing is done
			// No UI code
			// Completed notification
			deferred.resolve('Worker completed');

			worker.terminate();
		}
	});

	return deferred.promise();
}