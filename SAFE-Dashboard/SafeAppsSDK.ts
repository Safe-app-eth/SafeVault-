const safeSdk = await Safe.create({ ethAdapter, safeAddress });
const tx = await safeSdk.createTransaction({
  safeTransactionData: {
    to: recipientAddress,
    value: "0",
    data: "0x",
  },
});
await safeSdk.executeTransaction(tx);
await AppKit.SignClient().sendTransaction({ to, value, data });
