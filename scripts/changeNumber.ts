import { ethers } from "ethers";
import artifact from "../artifacts/contracts/HelloWorld.sol/HelloWorld.json"

async function main() {

    // Setup
    const provider = ethers.providers.getDefaultProvider("goerli");
    const wallet = new ethers.Wallet("0x4587fe5f583c22fa5fbec65f80cba8a0df02e1045f401c6bd33fd7341d9a3e04", provider);
    const address = "0xB83eDE15742c609dcF4EF95d47c2E41a141A2445";
    const abi = artifact.abi;

    // Get contract
    const myContract = new ethers.Contract(address, abi, wallet);

    // console.log(wallet.address)

    // Call `changeNumber`
    try {
        const num = 10;
        const result = await myContract.connect(wallet).changeNumber(num, ethers.constants.AddressZero);
        
        // console.log("Result: ", result);

        // await result.wait()
        
    } catch (e) {
        console.log("TRY-CATCH: ", e)
    }
}

main()
    .then(() => process.exit(0))