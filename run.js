var request = require("request");

var syncUrl = "https://parsimotion-syncer.azurewebsites.net/api/hooks/webjob";

var token = "*****";

var userId = "document_id";

var options = {
    url: syncUrl,
    headers: { signature: token },
    body: { userId: userId },
    json: true
};

request.post(options, function(err, result) {
    console.log(err);
    console.log(result);
});
