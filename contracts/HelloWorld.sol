// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract HelloWorld {
    uint256 public number;
    bytes public word;

    error NumberError(uint256 num);
    error WordError();

    function changeNumber(uint256 _newNum, address _dummy) public {
        if (_dummy == address(0)) {
            revert NumberError(_newNum);
        }
        number = _newNum;
    }

    function changeWord(bytes calldata _newWord) external {
        if (_newWord.length == 0) {
            revert WordError();
        }
        word = _newWord;
    }
}
