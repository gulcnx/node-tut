const http = require('http');

const server = http.createServer((req , res)=>{
if(req.url == '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about')
{
   res.end('This is our history');}
res.end(`
<h1 style="color: blue">Oops ! </h1>
<p>We can't seem to page you are looking for</p>
<a href="/">back home page</a>
`)
})

server.listen(5000)