"use strict";
var util=require("util");
var path=require("path");

var args = process.argv.slice(2);
var owner="elfscript";

if(args.length >=1){
	                owner= args[0];
}

console.log(util.format("to getRepos()  from  %s",owner));


var Client = require("./../lib/index");
var testAuth = require("./../test_token.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.repos.getAll({
    "affiliation": "owner,organization_member"
}, function(err, res) {
    console.log(err, res);
});
