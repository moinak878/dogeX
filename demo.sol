// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.1;

contract Test {
    string name;

    constructor(){
        name="test value";
    } 

    function setName ( string memory _name ) public{
        name = _name;
    }

    function getName() public view returns(string memory){
        return name;
    }
}
