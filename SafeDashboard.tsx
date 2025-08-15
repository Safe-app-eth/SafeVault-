'use client'
import React, { useEffect, useState } from 'react'
import SafeAppsSDK from '@safe-global/safe-apps-sdk'
import { ReownAppKit } from 'reown-appkit'

const config = {
  addedSafes: {
    "1": {
      "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43": {
        owners: [
          { value: "0x8ba1f109551bd432803012645ac136ddd64dba72", name: "Wallet 2" },
          { value: "0x89EdE5cBE53473A64d6C8DF14176a0d658dAAeDC", name: "Wallet 3" }
        ],
        threshold: 2
      }
    }
  },
  settings: {
    showHiddenBalances: true
  }
}

export default function SafeDashboard() {
  const [showHidden, setShowHidden] = useState(config.settings.showHiddenBalances)
  const [safeData, setSafeData] = useState<{ [safeAddr: string]: any }>({})
  const [sdk, setSdk] = useState<SafeAppsSDK | null>(null)
  const [reown, setReown] = useState<ReownAppKit | null>(null)

  useEffect(() => {
    async function init() {
      // Initialize Safe SDK
      const sdkInstance = new SafeAppsSDK()
      setSdk(sdkInstance)

      // Initialize Reown
      const reownInstance = new ReownAppKit({
        signerAddress: '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'
      })
      await reownInstance.init()
      setReown(reownInstance)

      // Fetch Safe info for all addedSafes
      const tempData: { [safeAddr: string]: any } = {}

      for (const chainId in config.addedSafes) {
        const safes = config.addedSafes[chainId]
        for (const safeAddr in safes) {
          try {
            const info = await sdkInstance.safe.getInfo()
            const owners = info.owners
            const threshold = info.threshold
            const balances: { [token: string]: string } = { ETH: await sdkInstance.safe.getBalance() }

            tempData[safeAddr] = { owners, threshold, balances }
          } catch (e) {
            console.error(`Failed to fetch Safe ${safeAddr}:`, e)
          }
        }
      }

      setSafeData(tempData)
    }

    init()
  }, [])

  const handleSendTx = async (safeAddr: string) => {
    if (!sdk) return
    const tx = {
      to: '0xYourDestinationAddress', // replace
      value: '10000000000000000', // 0.01 ETH
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
      </header>

      <main className="p-4">
        {Object.entries(config.addedSafes).map(([chainId, safes]) =>
          Object.entries(safes).map(([safeAddr, safe]) => {
            const data = safeData[safeAddr] || {}
            return (
              <div key={safeAddr} className="bg-white shadow rounded p-4 mb-4">
                <div className="font-bold mb-2">
                  Safe: <a href="#" target="_blank" className="text-blue-600">{safeAddr}</a> (Chain {chainId})
                </div>
                <div className="mb-2">
                  <strong>Owners:</strong>
                  <div className="ml-2">
                    {(data.owners || safe.owners.map(o => o.value)).map((o: string) => (
                      <div key={o}>{o}</div>
                    ))}
                  </div>
                </div>
                {showHidden && (
                  <div className="balances mb-2">
                    {Object.entries(data.balances || { ETH: '0' }).map(([token, bal]) => (
                      <div key={token}>{token}: {bal}</div>
                    ))}
                  </div>
                )}
                <div>Threshold: {data.threshold || safe.threshold}</div>
                <button
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={() => handleSendTx(safeAddr)}
                >
                  Send Test Transaction
                </button>
              </div>
            )
          })
        )}
      </main>
    </div>
  )
}
