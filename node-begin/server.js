const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log(request);
//     // send some response back
//     if(request.url === '/'){
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h1>Hello Developers!</h1>");
//         response.end();
//     }
// })

// server.listen(5001);

const server = http.createServer();

server.on('request', function(req, res){
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Hello Developers!</h1>");
        res.end();
    }else if(req.url === '/home'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Welcome Home!</h1>");
        res.end();
    }
})

server.on('listening', function(){
    console.log("Server is running!");

})

server.listen(5001);