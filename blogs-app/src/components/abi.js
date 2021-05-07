import Web3 from './web3';


const address = '0xd9D17526E99A39ae88FB9Ec2457b4997aefa41b9';
const abi =[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"heading","type":"string"},{"name":"content","type":"string"},{"name":"d","type":"string"}],"name":"addBlog","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"userId","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blogs","outputs":[{"name":"id","type":"uint256"},{"name":"heading","type":"string"},{"name":"content","type":"string"},{"name":"date","type":"string"},{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"signUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"add","type":"address"}],"name":"getMyBlogs","outputs":[{"components":[{"name":"id","type":"uint256"},{"name":"heading","type":"string"},{"name":"content","type":"string"},{"name":"date","type":"string"},{"name":"owner","type":"address"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"heading","type":"string"},{"indexed":false,"name":"content","type":"string"},{"indexed":false,"name":"date","type":"string"},{"indexed":false,"name":"owner","type":"address"}],"name":"BlogCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"userId","type":"uint256"},{"indexed":false,"name":"user","type":"address"}],"name":"Users","type":"event"}]

export default new Web3.eth.Contract(abi,address);