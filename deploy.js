
const Web3 = require('web3');
const fs = require('fs');
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

const {abi,bytecode} = require('./compile');
let blog;
let account = "0xb8E6BAaeeE33AA0fcfEC7D764119E7B8E705FF13";

let accountPvtKey = "55e10468de86511d1d2a7240df6676a076aed818819331643659322d677fd125";



const contract = new web3.eth.Contract(JSON.parse(abi));

console.log(abi);

blog = contract.deploy({data:bytecode,from:account,gas:"4630",gasLimit:"6385876"});

const call  = async() => {
const createTransaction = await web3.eth.accounts.signTransaction(
    {
       data: blog.encodeABI(),  
       gas: await blog.estimateGas(),
    },
    accountPvtKey
 );
 const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
 );
 console.log(createReceipt.contractAddress);
}

// console.log(blog);

call();





