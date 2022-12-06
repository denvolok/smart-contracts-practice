// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../../../src/Ethernaut/CoinFlip/CoinFlip.sol";
import "../../../src/Ethernaut/CoinFlip/CoinFlipAttack.sol";

contract CoinFlipAttackTest is Test {
    CoinFlip coinFlip;
    CoinFlipAttack coinFlipAttack;

    function setUp() public {
        coinFlip = new CoinFlip();
        coinFlipAttack = new CoinFlipAttack(address(coinFlip));
    }

    function testAttackSucceeded() public {
        coinFlipAttack.attack();
        require(coinFlip.consecutiveWins() == 1);
    }
}
