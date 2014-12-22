var request = require("request");

var syncUrl = "https://parsimotion-syncer.azurewebsites.net/api/hooks/webjob";
syncUrl = "http://localhost:9000/api/hooks/webjob";
var token = "*****";

var userId = "*****";

var options = {
    url: syncUrl,
    headers: { signature: token },
	body: { userId: userId },
	json: true
};

request.post(options, function(err, result) {
	if (err)
		console.error(new Date() + ": Falla...\n" + err);
	else {
		result = result.body;
		console.log(new Date() + ": OK (fulfilled: %d, failed: %d, unlinked: %d)", result.fulfilled.length, result.failed.length, result.failed.length);
	}
});
