//fs is the built-in module.
const fs = require("fs");

console.log("I am 1st")

// This is a asyncronous function; Explanation:- Which means what ever the time it will do to complete the work it will take, But It will not make wait other script, Because of this thats why asyncronous;
fs.readFile("./sample.txt","utf-8" , (err, data)=>{
    if(err){
        retun(err)
    }
    else{
        console.log(data , "I am 2nd as a async function");
    }
})

console.log("I am 3rd")

//This is syncronous function: Explanation:
console.log(fs.readFileSync("./sample.txt","utf-8") , "I am 4th as a sync function" );

console.log("I am 5th")


//Instead of doing:  (fs.readfile()) we will use readFile() only.
// fs.readFile again and again we can import it simply:

//importing Statement:
const { readFile } = require("fs")



readFile("./Reading File.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
