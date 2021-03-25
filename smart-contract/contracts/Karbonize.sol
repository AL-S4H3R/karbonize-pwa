// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Karbonize is ERC20 {
    constructor(uint256 initialSupply) ERC20("Karbon Kredit", "KKZ") {
        _mint(msg.sender, initialSupply);
    }
}