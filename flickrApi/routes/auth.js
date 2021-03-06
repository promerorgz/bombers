var OAuth = require("oauth");
var utils = require("../utils.js");

exports.auth = function (req, res) {
  var config = utils.config();

  if (config.auth) {
    res.send("app configured. route inactive.");
  } else {
    // var referer = req.headers.referer;
    // var redirect =
    //   typeof referer != "undefined"
    //     ? referer.substring(0, referer.indexOf("/setup")) + "/auth?callback=1"
    //     : null;

    var oa = new OAuth.OAuth(
      "https://www.flickr.com/services/oauth/request_token",
      "https://www.flickr.com/services/oauth/access_token",
      process.env.FLICKR_API_KEY,
      process.env.FLICKR_SECRET,
      "1.0",
      redirect,
      "HMAC-SHA1"
    );

    if (req.param("callback")) {
      var oauth_token = req.param("oauth_token");
      var oauth_verifier = req.param("oauth_verifier");

      oa.getOAuthAccessToken(
        oauth_token,
        req.session.oauth_token_secret,
        oauth_verifier,
        function (err, oauth_access_token, oauth_access_token_secret, results) {
          var secured = {
            results: results,
            oauth_access_token: oauth_access_token,
            oauth_access_token_secret: oauth_access_token_secret,
          };
          config.auth = secured;
          config.user_id = secured.results.user_nsid;

          var fs = require("fs");
          fs.writeFile(
            "./config.json",
            JSON.stringify(config, null, 1),
            function (err) {
              req.app.set("config", utils.config());
              req.app.set(
                "flickr_api_base_url",
                (config.use_https
                  ? "https://api.flickr.com/services/rest"
                  : "http://api.flickr.com/services/rest") +
                  "?format=json&nojsoncallback=1&oauth_consumer_key=" +
                  config.consumer_key
              );
              res.redirect("/");
            }
          );
        }
      );
    } else {
      // get request token
      oa.getOAuthRequestToken(function (
        error,
        oauth_token,
        oauth_token_secret,
        results
      ) {
        console.log(
          "Redirecting to http://www.flickr.com/services/oauth/authorize?oauth_token=" +
            oauth_token +
            " ..."
        );
        req.session.oauth_token_secret = oauth_token_secret; // save oauth_token_secret in session
        res.redirect(
          "http://www.flickr.com/services/oauth/authorize?oauth_token=" +
            oauth_token +
            "&perms=read"
        );
      });
    }
  }
};
