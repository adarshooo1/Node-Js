const http = require("http");
const fs = require("fs")
const port = 2002
const hostName = "localhost"

const home = fs.readFileSync("./home.html" , "utf-8")
const service = fs.readFileSync("./service.html", "utf-8")
const help = fs.readFileSync("./help.html","utf-8")

const server = http.createServer((request, response) => {
  if(request.url === "/"){
    return response.end(home);
  }
  else if(request.url === "/service"){
    return response.end(service);
  }
  else if(request.url === "/help"){
    return response.end(help);
  }
  else{
    return response.end("<h1>ERROR</h1><p>Please try entering the correct URL.</p>");
  }
})

//This will show the server because this will listen when we have written and give the response at the server
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
  })