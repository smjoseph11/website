//get a reference to the file system module
var fs = require('fs');

//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js, file-2.js and file-3.js
var vendor = UglifyJS.minify(["js/vendor/modernizr-2.8.3-respond-1.4.2.min.js", "js/vendor/underscore.min.js"]);

var local = UglifyJS.minify(["js/main.js", "js/musicplayer.js"]);

//view the output

fs.writeFile("js/vendor/ugly-vendor.min.js", vendor.code, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});
fs.writeFile("js/ugly-local.min.js", local.code, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});
