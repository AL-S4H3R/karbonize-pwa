// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Karbonize is ERC20 {

    //initially mint 2 Million tokens
    constructor(uint256 initialSupply) ERC20("Karbon Kredit", "KKZ") {
        _mint(msg.sender, initialSupply);
    }

    mapping(address => uint256) public kreditBalances;

    function buyKredits (address _buyer, uint256 _kredits) public payable {
        transfer(_buyer, _kredits);
        kreditBalances[_buyer] += _kredits;
    }

    function sellKredits (address payable _seller, uint256 _amount, uint256 _kredits) public {
        _seller.transfer(_amount);
        transferFrom(_seller, address(this), _kredits);
        kreditBalances[_seller] -= _kredits;
    }
}