const { write } = require("fs");
var http = require("http");


var hostname='localhost';


console.log("hello world");
http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Hello Node!!!!</h1>");
    end.write();
  }).listen(3000,hostname);


var fs = require("fs");
var data = fs.readFileSync("welcome.txt");

console.log(data.toString());

fs.readFile('hello.txt',(err,data)=>{
        if (err) return console.error(err);
        console.log(data.toString());
});

