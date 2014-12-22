var request = require("request");

var syncUrl = "https://parsimotion-syncer.azurewebsites.net/hooks/webjob/notification"
var token = "*****";

var options = {
    url: syncUrl,
    metod: "POST",
    headers: {
        "Signature": token
    }
};

request.post(options, function(err, coso) {
	if (err) { console.err(new Date() + ": Falla"); }
	else { console.log(new Date() + ": OK"); }
});