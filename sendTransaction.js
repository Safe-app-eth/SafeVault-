import Safe from '@safe-global/protocol-kit'
import { ethers } from 'ethers'
import dotenv from 'dotenv'

dotenv.config()

export default async function sendTransaction({ to, value, data = "0x" }) {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  const safeSdk = await Safe.create({
    ethAdapter: { ethers, signerOrProvider: signer },
    safeAddress: process.env.SAFE_ADDRESS
  })

  const amountInWei = ethers.parseEther(value.toString())

  const transaction = {
    to,
    value: amountInWei.toString(),
    data
  }

  const safeTransaction = await safeSdk.createTransaction({ transactions: [transaction] })
  const signedTransaction = await safeSdk.signTransaction(safeTransaction)
  const txResponse = await safeSdk.executeTransaction(signedTransaction)

  const receipt = await txResponse.wait()
  return {
    hash: txResponse.hash,
    blockNumber: receipt.blockNumber
  }
}
