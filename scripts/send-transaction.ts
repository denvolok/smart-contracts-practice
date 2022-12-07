import { getWallet } from "./_utils";

const sendTransaction = async () => {
  const wallet = await getWallet();

  console.log(`> Transaction from: ${wallet.address}`);

  const tx = await wallet.sendTransaction({
    to: "0x65cD03A979812090A674587d9aEf21D9989c0Bbd",
    data: "0x9e5faafc",
  });

  await tx.wait();

  console.log(`> Transaction hash: ${tx.hash}`);
};

sendTransaction().catch(console.error);
