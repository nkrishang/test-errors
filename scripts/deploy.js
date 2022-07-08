const { ethers } = require("hardhat");

async function main() {
    const myContract = await ethers.getContractFactory("HelloWorld").then(f => f.deploy());
    console.log("Contract address: ", myContract.address); // 0xB83eDE15742c609dcF4EF95d47c2E41a141A2445
}

main()