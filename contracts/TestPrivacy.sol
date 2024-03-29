// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract TestPrivacy is Ownable {
    uint256 private _data;

    constructor() Ownable(msg.sender) {

    }

    function setData(uint __data) external {
        _data = __data;
    }

    function data() external view onlyOwner returns (uint) {
        return _data;
    }
}
