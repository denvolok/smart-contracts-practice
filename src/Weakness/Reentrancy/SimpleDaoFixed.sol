// SPDX-License-Identifier: SEE LICENSE IN LICENSE
/*
 * @source: http://blockchain.unica.it/projects/ethereum-survey/attacks.html#simpledao
 * @author: Atzei N., Bartoletti M., Cimoli T
 * Modified by Bernhard Mueller, Josselin Feist
 */
pragma solidity ^0.8.0;

contract SimpleDAO {
    mapping(address => uint) public credit;

    function donate(address to) public payable {
        credit[to] += msg.value;
    }

    function withdraw(uint amount) public {
        if (credit[msg.sender] >= amount) {
            credit[msg.sender] -= amount;

            (bool success,) = msg.sender.call{value: amount}("");
            
            require(success);
        }
    }

    function queryCredit(address to) public view returns (uint) {
        return credit[to];
    }
}
