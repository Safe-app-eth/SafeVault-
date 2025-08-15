'use client'
import React, { useEffect, useState } from 'react'
import SafeAppsSDK from '@safe-global/safe-apps-sdk'
import { SafeAppProvider } from '@safe-global/safe-apps-react-sdk'
import { ReownAppKit } from 'reown-appkit'

type SafeInfo = {
  owners: string[]
  threshold: number
  balances: { [token: string]: string }
}

export default function SafeConnector() {
  const [safeInfo, setSafeInfo] = useState<SafeInfo | null>(null)
  const [sdk, setSdk] = useState<SafeAppsSDK | null>(null)

  useEffect(() => {
    async function initSafe() {
      // Initialize SafeApps SDK
      const sdkInstance = new SafeAppsSDK()
      setSdk(sdkInstance)

      // Connect to Safe
      const info = await sdkInstance.safe.getInfo()
      const owners = info.owners
      const threshold = info.threshold

      // Example: Fetch ETH balance (can add ERC20 later)
      const balances: { [token: string]: string } = {
        ETH: await sdkInstance.safe.getBalance()
      }

      setSafeInfo({ owners, threshold, balances })

      // Initialize Reown AppKit
      const reown = new ReownAppKit({
        signerAddress: '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'
      })
      await reown.init()
      console.log('Reown initialized:', reown)
    }

    initSafe()
  }, [])

  if (!safeInfo) return <div>Loading Safe data...</div>

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-bold mb-2">Safe Info</h2>
      <div><strong>Threshold:</strong> {safeInfo.threshold}</div>
      <div><strong>Owners:</strong>
        <ul className="ml-4 list-disc">
          {safeInfo.owners.map(o => <li key={o}>{o}</li>)}
        </ul>
      </div>
      <div><strong>Balances:</strong>
        <ul className="ml-4 list-disc">
          {Object.entries(safeInfo.balances).map(([token, bal]) => (
            <li key={token}>{token}: {bal}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={async () => {
          if (!sdk) return
          const tx = {
            to: '0xYourDestinationAddress',
            value: '10000000000000000', // 0.01 ETH
            data: '0x'
          }
          await sdk.txs.send({ txs: [tx] })
          alert('Transaction sent!')
        }}
      >
        Send Test Transaction
      </button>
    </div>
  )
}
