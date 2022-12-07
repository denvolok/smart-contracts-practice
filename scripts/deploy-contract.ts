import { ContractFactory } from "ethers";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { getWallet } from "./_utils";

dotenv.config();

/**
 * Example usage:
 * $ yarn deploy "CoinFlipAttack.sol/CoinFlipAttack" '["0x97A9dFb9C4e6FE2F7105F8E2aa11A95DC8272bAd"]'
 */
const deploy = async () => {
  const wallet = await getWallet();
  const contractJsonPath = path.join(__dirname, `../out/${process.argv[2]}.json`);
  const constructorArgs = JSON.parse(process.argv[3] || "[]");

  const metadata = JSON.parse(fs.readFileSync(contractJsonPath).toString());
  const factory = new ContractFactory(metadata.abi, metadata.bytecode.object, wallet);

  console.log(`> Deploying from: ${wallet.address}`);

  const contract = await factory.deploy(...constructorArgs);
  await contract.deployed();

  console.log(`> Deployed at: ${contract.address}`);
};

deploy().catch(console.error);
