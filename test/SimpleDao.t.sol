// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Reentrancy/SimpleDao.sol";
import "../src/Reentrancy/SimpleDaoAttack.sol";

contract SimpleDAOTest is Test {
    SimpleDAOAttack daoAttack;
    SimpleDAO dao;

    function setUp() public {
        dao = new SimpleDAO();
        daoAttack = new SimpleDAOAttack();
        
        deal(address(dao), 2 ether);
        deal(address(daoAttack), 1 ether);
    }

    function testFailAttackSucceeded() public {
        daoAttack.attack(address(dao));
    }
}
