import Web3 from 'web3';
import ganache from 'ganache-cli';


const web3 = new Web3(ganache.provider());

export default web3;
