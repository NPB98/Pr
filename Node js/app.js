const fs = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
         fs.readFile('message.txt','utf-8',(err,data)=>{
            if(err){
                console.error(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="Message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })
    }
    else if(url==='/message'&& method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    else{
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
    // if(req.url=='/home')
    //     res.write('<body><h1>Welcome home/h1></body>');
    // if(req.url=='/about')
    //     res.write('<body><h1>Welcome to About Us page</h1></body>');
    // if(req.url=='/node')
    //     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    //process.exit();
    }
});
server.listen(4000);