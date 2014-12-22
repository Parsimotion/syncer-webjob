var request = require("request");

var syncUrl = "https://parsimotion-syncer.azurewebsites.net/api/hooks/webjob";
//syncUrl = "http://localhost:9000/api/hooks/webjob";

var token = "*****";

var options = {
    url: syncUrl,
    metod: "POST",
    headers: {
        "signature": token
    }
};

request.post(options, function(err, coso) {
	if (err)
		console.error(new Date() + ": Falla...\n" + err);
	else
		console.log(new Date() + ": OK");
});
