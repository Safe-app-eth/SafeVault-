# 🔐 SafeVault GitHub Dashboard UI

## ✅ What This Is

'use client'
import React, { useEffect, useState } from 'react'
import SafeAppsSDK from '@safe-global/safe-apps-sdk'
import { ReownAppKit } from 'reown-appkit'
import { ethers } from 'ethers'

export default function SafeDashboard() {
  const [showHidden, setShowHidden] = useState(true)
  const [safeData, setSafeData] = useState<{ [safeAddr: string]: any }>({})
  const [sdk, setSdk] = useState<SafeAppsSDK | null>(null)
  const [reown, setReown] = useState<ReownAppKit | null>(null)
  const [newSafe, setNewSafe] = useState('')

  const addedSafesInitial = {
    "1": {
      "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43": {
        owners: [
          { value: "0x8ba1f109551bd432803012645ac136ddd64dba72", name: "Wallet 2" },
          { value: "0x89EdE5cBE53473A64d6C8DF14176a0d658dAAeDC", name: "Wallet 3" }
        ],
        threshold: 2
      }
    }
  }

  const [addedSafes, setAddedSafes] = useState(addedSafesInitial)

  useEffect(() => {
    async function init() {
      const sdkInstance = new SafeAppsSDK()
      setSdk(sdkInstance)

      const reownInstance = new ReownAppKit({
        signerAddress: '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'
      })
      await reownInstance.init()
      setReown(reownInstance)

      await fetchAllSafeData(addedSafes)
    }

    init()
  }, [])

  const fetchAllSafeData = async (safes: any) => {
    const tempData: { [safeAddr: string]: any } = {}

    for (const chainId in safes) {
      const chainSafes = safes[chainId]
      for (const safeAddr in chainSafes) {
        try {
          const info = await sdk!.safe.getInfo()
          const owners = info.owners
          const threshold = info.threshold

          // ETH balance
          const balances: { [token: string]: string } = {
            ETH: await sdk!.safe.getBalance()
          }

          // Fetch all ERC20 tokens
          const tokens = await sdk!.safe.getTokenList()
          const provider = new ethers.providers.Web3Provider((window as any).ethereum)
          for (const token of tokens) {
            const erc20 = new ethers.Contract(
              token.address,
              ["function balanceOf(address) view returns (uint256)"],
              provider
            )
            const balance = await erc20.balanceOf(safeAddr)
            balances[token.symbol] = ethers.utils.formatUnits(balance, token.decimals)
          }

          tempData[safeAddr] = { owners, threshold, balances }
        } catch (e) {
          console.error(`Failed to fetch Safe ${safeAddr}:`, e)
        }
      }
    }

    setSafeData(tempData)
  }

  const handleAddSafe = async () => {
    if (!newSafe) return
    const updatedSafes = { ...addedSafes }
    updatedSafes["1"][newSafe] = { owners: [], threshold: 1 }
    setAddedSafes(updatedSafes)
    setNewSafe('')
    await fetchAllSafeData(updatedSafes)
  }

  const handleSendTx = async (safeAddr: string) => {
    if (!sdk) return
    const tx = {
      to: '0xYourDestinationAddress',
      value: '10000000000000000',
      data: '0x'
    }
    await sdk.txs.send({ txs: [tx] })
    alert(`Transaction sent from ${safeAddr}!`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">SafeVault Dashboard</h1>
        <div className="mt-2">
          <button
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setShowHidden(!showHidden)}
          >
            Toggle Hidden Balances
          </button>
        </div>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Add new Safe address"
            value={newSafe}
            onChange={(e) => setNewSafe(e.target.value)}
            className="px-2 py-1 rounded mr-2"
          />
          <button
            className="bg-green-600 px-4 py-1 rounded text-white hover:bg-green-700 transition"
            onClick={handleAddSafe}
          >
            Add Safe
          </button>
        </div>
      </header>

      <main className="p-4">
        {Object.entries(addedSafes["1"]).map(([safeAddr, safe]) => {
          const data = safeData[safeAddr] || { owners: safe.owners.map(o => o.value), threshold: safe.threshold, balances: {} }
          return (
            <div key={safeAddr} className="bg-white shadow rounded p-4 mb-4">
              <div className="font-bold mb-2">
                Safe: <a href="#" target="_blank" className="text-blue-600">{safeAddr}</a>
              </div>
              <div className="mb-2">
                <strong>Owners:</strong>
                <ul className="ml-4 list-disc">
                  {data.owners.map((o: string) => <li key={o}>{o}</li>)}
                </ul>
              </div>
              {showHidden && (
                <div className="balances mb-2">
                  <strong>Balances:</strong>
                  <ul className="ml-4 list-disc">
                    {Object.entries(data.balances).map(([token, bal]) => (
                      <li key={token}>{token}: {bal}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>Threshold: {data.threshold}</div>
              <button
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => handleSendTx(safeAddr)}
              >
                Send Test Transaction
              </button>
            </div>
          )
        })}
      </main>
    </div>
  )
}
