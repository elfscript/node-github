"use strict";
var util=require("util");
var path=require("path");

var args = process.argv.slice(2);
var owner="elfscript";
var repo="nodegit";

if(args.length >=1){
	        repo= args[0];
}

if(args.length >=2){
	        owner= args[1];
}

console.log(util.format("to getContent()  from %s owned by %s",repo,owner));


var Client = require("./../lib/index");

var github = new Client({
    debug: true
});

github.repos.getContent({
    owner: owner,
    repo: repo,
    path: ""
}, function(err, res) {
    console.log(err, res);
});
