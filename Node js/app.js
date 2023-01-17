const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('Nishi');
});
server.listen(4000);