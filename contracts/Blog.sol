//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;


contract Blogs{
    
    uint16 public blogCount;
    address[] public users;
    uint16 public userId;
    
    
    
    struct Blog{
        uint id;    
        string heading;
        string content;
        string date;
        address owner;
    }
    mapping(uint => Blog) public blogs;


    function getMyBlogs(address add) public view returns (Blog[] memory){
        Blog[] memory oBlogs = new Blog[](blogCount);

        for (uint i = 1; i <= blogCount; i++) {
            if(blogs[i].owner == add){
                Blog storage oBlog = blogs[i];
                oBlogs[i] = oBlog;
            }
        }
        return oBlogs;
    }


    
    constructor() public payable{
        blogCount = 0;
        userId = 101;
    }
    
    
    event BlogCreated(
        uint id,
        string heading,
        string content,
        string date,
        address owner
    );
    
    event Users(
        uint userId,
        address user
    );
    
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function deposit(uint amount) payable public{
        require(msg.value == amount);
    }
    
    function addBlog(string memory heading,string memory content,string memory d) public{
        blogCount++;
        blogs[blogCount] = Blog(blogCount,heading,content,d,msg.sender);
        emit BlogCreated(blogCount,heading,content,d,msg.sender);
    }
    
    function signUp() public{
        // users.push(msg.sender);
        userId++;
        // deposit(0.001 ether);       
        emit Users(userId,msg.sender);
    }
}