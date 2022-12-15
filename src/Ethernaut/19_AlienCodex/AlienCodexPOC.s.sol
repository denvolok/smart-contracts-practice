// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract AlienCodexPOC {
    address owner;

    constructor() {
        owner = msg.sender;
    }
}
