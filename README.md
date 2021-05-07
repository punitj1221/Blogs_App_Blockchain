#Welcome to Crypto Blogs

###To run the project first some modules needs to be installed.

// Make sure you have metamask and ganache installed

1. Open the folder "Blogging Platform" inside the terminal after extracting the files from the .zip file.
2. Run command "npm install" to install all the related modules and to resolve the dependencies.
3. Change directory to blogs-app inside Blogging Platform folder.
4. Run commands "yarn add" and "npm install" here.

###Now the dependencies have been resolved. Now we need to create an initial setup to get going.

1. Open deploy.js and replace the private key and accountId with the one from ganache application. 
2. Run "node deploy.js" in the terminal. It will return ABI and address where the contract have been deployed.
3. Copy the abi and address and paste it the file abi.js present in the blogs-app/src/components directory.
4. Now run the App.js file by running the command "yarn start" command inside blogs-app directory.
5. The program successfully runs on localhost:3000. Visit localhost:3000/home to visit the front page and allow metamask to connect to the website.
6. You can add new blogs using the metamask account and then view that blog on localhost:3000/home



