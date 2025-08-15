type TransactionEvent = {
  blockHash: string;
  blockNumber: number;
  from: string;
  hash: string;
  network: string;
  to?: string;
  logs: Array<{
    address: string;
    data: string;
    topics: string[];
  }>;
  input: string;
  value: string;
  nonce: string;
  gas: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  gasPrice: string;
  gasTipCap: string;
  gasFeeCap: string;
  transactionHash: string;
};
