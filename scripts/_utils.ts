import * as childProcess from "child_process";
import * as dotenv from "dotenv";
import { ethers } from "ethers";
import { promisify } from "util";

dotenv.config();

const exec = promisify(childProcess.exec);
const { ETH_NETWORK, INFURA_API_KEY, INFURA_API_KEY_SECRET } = process.env;

export const getAccPrivateKey = async (): Promise<string> => {
  return exec(`pass ${process.env.ACC_PRIVATE_KEY_PATH}`).then((res) =>
    res.stdout.replace(/\n/, ""),
  );
};

export const getInfuraProvider = (): ethers.providers.Provider => {
  return new ethers.providers.InfuraProvider(ETH_NETWORK, {
    projectId: INFURA_API_KEY,
    projectSecret: INFURA_API_KEY_SECRET,
  });
};

export const getWallet = async (_provider?: ethers.providers.Provider): Promise<ethers.Wallet> => {
  const provider = _provider || getInfuraProvider();
  const privateKey = await getAccPrivateKey();

  return new ethers.Wallet(privateKey, provider);
};

export const getAnvilProvider = (): ethers.providers.Provider => {
  return new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
};

export const getAnvilWallet = (): ethers.Wallet => {
  const provider = getAnvilProvider();
  const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

  return new ethers.Wallet(privateKey, provider);
};
