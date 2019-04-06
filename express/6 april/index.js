var express = require("express");
var http = require("http");
var app = express();

// app.use(function (request, response, next) {
//     console.log("In comes a " + request.method + " to " + request.url);
//     next();
// });

// app.use(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello, World!");
// });

// http.createServer(app).listen(3000);



// app.use(function (request, response, next) {

//     console.log("In comes a " + request.method + " to " + request.url);
//     next();
// });
// app.use(function (request, response, next) {
//     var minute = (new Date()).getMinutes();
//     if ((minute % 2) === 0) {
//         next();
//     } else {
//         response.statusCode = 401;
//         response.end("Not authorized.");
//     }
// });
// app.use(function (request, response) {
//     response.end('Secret info: the password is "swordfish"!');
// })

// http.createServer(app).listen(3000);


// var logger = require("morgan");
// app.use(logger("short"));
// app.use(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello, World!");
// });

// http.createServer(app).listen(3000);



// var path = require("path");

// var publicPath = path.resolve(__dirname, "public");

// console.log("__dirname: ", __dirname)

// // C:\_PROJECTS\_CLASS\IoT-voice-app-Batch-3\express\6 april

// app.use(express.static(publicPath));

// app.use(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Looks like you didn't find a static file.");
// });

// http.createServer(app).listen(3000);


var path = require("path");

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function (request, response) {
    response.end("Welcome to my homepage!")
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("/weather", function (request, response) {
    response.end("The current weather is NICE.");
});

app.use(function (request, response) {

    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(3000)