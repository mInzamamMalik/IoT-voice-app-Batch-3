// var url = require("url");
// var parsedURL = url.parse("http://www.example.com/profile?name=barry"); 

// console.log(parsedURL)


// console.log(parsedURL.protocol); // "http:"
// console.log(parsedURL.host); // "www.example.com"
// console.log(parsedURL.query); // "name=barry


/////////////////////////////////////////
// var Mustache = require("mustache")

// // Returns "Hello, Nicholas Cage!"
// var a = Mustache.render("Hello, {{first}} {{last}}!", {
//     first: "Nicholas",
//     last: "Cage"
// });
// // Returns "Hello, Sheryl Sandberg!"
// Mustache.render("Hello, {{first}} {{last}}!", {
//     first: "Sheryl",
//     last: "Sandberg"
// });

///////////////////////////////////////////


// var randomNumberGen = require("./myModule");

// console.log(randomNumberGen)

// console.log(     randomNumberGen()     )




// var fs = require("fs");
// var options = { encoding: "utf-8" };

// fs.readFile("myfile.txt", options, function (err, data) {

//     if (err) {

//         console.error("Error reading file!");
//         return;
//     }
//     console.log(data);
// });

// console.log("last console");







var http = require("http");



var server = http.createServer(function requestHandler(request, response) {

    console.log("In comes a request to: " + request.url);

    if (request.url == "/"){
        response.end("Hello, world!");

    }else if(request.url == "/profile"){
        response.end("profileF");

    }else{
        response.end("404")
    }

});

server.listen(3000);





