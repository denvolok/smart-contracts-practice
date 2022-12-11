import { getInfuraProvider } from "./_utils";

const call = async () => {
  const provider = getInfuraProvider();

  const res = await provider.getBalance("0x0000000000000000000000000000000000000000");
  console.log(res);
};

call().catch(console.error);
