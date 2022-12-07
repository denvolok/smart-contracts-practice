import * as childProcess from "child_process";
import { promisify } from "util";
import * as dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

const exec = promisify(childProcess.exec);
const { ETH_NETWORK, INFURA_API_KEY, INFURA_API_KEY_SECRET } = process.env;

export const getAccPrivateKey = async (): Promise<string> => {
  return exec(`pass ${process.env.ACC_PRIVATE_KEY_PATH}`).then((res) =>
    res.stdout.replace(/\n/, ""),
  );
};

export const getProvider = (): ethers.providers.Provider => {
  return new ethers.providers.InfuraProvider(ETH_NETWORK, {
    projectId: INFURA_API_KEY,
    projectSecret: INFURA_API_KEY_SECRET,
  });
};

export const getWallet = async (): Promise<ethers.Wallet> => {
  const privateKey = await getAccPrivateKey();
  const provider = getProvider();

  return new ethers.Wallet(privateKey, provider);
};
