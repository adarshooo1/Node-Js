const os = require("os")

const a = os.freemem()//This will tell about the memory.
console.log(a)
//2289459200 

console.log(os.arch())//Returns the operating system CPU architecture
//x64

console.log(os.homedir())//Returns the string path of the current user's home directory.
//C:/Users/Adarsh Singh

console.log(os.machine())//Returns the machine type as a string, such as arm, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.
//x86_64

console.log(os.uptime())//Returns the system uptime in number of seconds
//321348.562

console.log(os.endianness())//LE:-Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
console.log(os.hostname())//AcerSwift3:-Returns the host name of the operating system as a string.
console.log(os.release())//10.0.22621:-Returns the operating system as a string.
console.log(os.getPriority())//0Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.

//This is a built is module
