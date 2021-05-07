//generic module to give path
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//path for the main .sol file
const inboxPath = path.resolve(__dirname,'contracts','Blog.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');




const output = solc.compile(source,1);

 module.exports.bytecode = output.contracts[':Blogs'].bytecode;

 module.exports.abi = output.contracts[':Blogs'].interface;
   


