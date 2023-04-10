const fs = require("fs");

const Message = "This is the example of writeFile Where I am passing a message inside the argument and this message will we wisible in the writeFille.txt and source code will be in writeFile.js"


//This is an asyncronous function which will take time as it required by will not disturbe the flow of programm and let other scripts to run.
fs.writeFile("./WriteFile.txt" , Message , ()=>{
    console.log("File Written")
})

//This is an syncronous function which will take time as it required as well as it will not let other scripts to run
fs.writeFileSync("./WriteFile.txt" , Message)
