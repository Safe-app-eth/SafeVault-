import Safe from '@safe-global/protocol-kit'
import { ethers } from 'ethers'
import dotenv from 'dotenv'

dotenv.config()

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  console.log("Signer Address:", await signer.getAddress())

  const safeSdk = await Safe.create({
    ethAdapter: { ethers, signerOrProvider: signer },
    safeAddress: process.env.SAFE_ADDRESS
  })

  // Transaction data — for example, sending ETH
  const amountInWei = ethers.parseEther("0.01")
  const transaction = {
    to: "0xRecipientAddressHere", // replace with recipient
    value: amountInWei.toString(),
    data: "0x"
  }

  // Create Safe transaction
  const safeTransaction = await safeSdk.createTransaction({ transactions: [transaction] })

  // Sign transaction
  const signedTransaction = await safeSdk.signTransaction(safeTransaction)

  // Execute transaction
  const txResponse = await safeSdk.executeTransaction(signedTransaction)
  console.log("Transaction Hash:", txResponse.hash)

  // Wait for confirmation
  const receipt = await txResponse.wait()
  console.log("Transaction confirmed in block:", receipt.blockNumber)
}

main().catch(console.error)
