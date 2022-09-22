const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('isItPrime(23)');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function isItPrime(n) 
var  b = 0  ;
{

  if (n <= 1) 
  { 
    return false;   
  } 
  else if (n == 2)
   { 
    return true;     
  }
  else if (n == 3)
   { 
    return true;     
  } 
   else b = ((n-1)/2);
   {
    for (let i = 3; i < n; i++) 
    { 
      if (n % i === 0) 
      {
        return false; 
      }
    } 
    return true; 
  }
}

console.log(isItPrime(23)) 