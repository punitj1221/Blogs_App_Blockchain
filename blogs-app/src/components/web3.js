import Web3 from 'web3';

let web3 = new Web3();
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function() {
        });
      } catch (e) {
        // User has denied account access to DApp...
      }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      web3 = new Web3(web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
      alert("You have to install MetaMask !");
    }
    window.ethereum.enable();
    console.log(" typoe of = ", typeof web3);
    let web3Provider;
    if (typeof web3 != "undefined") {
       web3Provider = web3.currentProvider;
      window.ethereum.enable();
    } else {
        web3Provider = new Web3.providers.HttpProvider(
        "HTTP://127.0.0.1:7545"
      );
      window.ethereum.enable();
    }

// const web3 = new Web3(Web3.givenProvider);

export default web3;
