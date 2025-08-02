const messageHex = "0xe5582702adc2ce1c27e40823b76eafee815535960a22ceec572044502f1bc23d";
const chainId = 42161;
const verifyingContract = "0x821f2b40d965b81202b181aba1c7a380c49ed675";

const typedData = getSafeMessageTypedData({
  message: messageHex,
  chainId,
  verifyingContract,
});

// Sign (off-chain)
const signature = await signSafeMessage(signer, typedData);

// Recover signer (off-chain)
const recovered = recoverSignerAddress(typedData, signature);
console.log("Recovered:", recovered);

// Verify on-chain
const isValid = await verifySignatureOnChain({
  provider,
  safeAddress: verifyingContract,
  typedData,
  signature,
});

console.log("On-chain valid:", isValid);
