import { getWallet } from "./_utils";

const sendTransaction = async () => {
  const wallet = await getWallet();

  console.log(`> Transaction from: ${wallet.address}`);

  const tx = await wallet.sendTransaction({
    to: "0xA1508273ca15Ab124F8BE9DCAc018537244e0d1d",
    data: "0x9e5faafc",
  });

  await tx.wait();

  console.log(`> Transaction hash: ${tx.hash}`);
};

sendTransaction().catch(console.error);
