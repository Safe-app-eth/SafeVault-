import { ethers } from "ethers";
import axios from "axios";
import { NETWORKS } from "./networks";

const contractsToWatch = [
  "0xYourContract1",
  "0xYourContract2",
  "0xYourContract3"
];

export async function startMonitoring(chain: keyof typeof NETWORKS) {
  const provider = new ethers.JsonRpcProvider(NETWORKS[chain].rpcUrl);

  contractsToWatch.forEach(contract => {
    const filter = {
      address: contract,
      topics: []
    };

    provider.on(filter, async (log) => {
      console.log(`New event on ${contract}:`, log);
      await axios.post(process.env.NOTIFY_WEBHOOK!, {
        signer: process.env.SAFE_SIGNER,
        chain,
        contract,
        data: log
      });
    });
  });
}
