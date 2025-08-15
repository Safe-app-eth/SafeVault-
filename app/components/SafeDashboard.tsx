'use client'
import React, { useState } from 'react'

const config = {
  addressBook: {
    "1": {
      "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43": "Wallet 1",
      "0x8ba1f109551bd432803012645ac136ddd64dba72": "Wallet 2",
      "0x89EdE5cBE53473A64d6C8DF14176a0d658dAAeDC": "Wallet 3"
    }
  },
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
          Object.entries(safes).map(([safeAddr, safe]) => (
            <div key={safeAddr} className="bg-white shadow rounded p-4 mb-4">
              <div className="font-bold mb-2">
                Safe: <a href="#" target="_blank" className="text-blue-600">{safeAddr}</a> (Chain {chainId})
              </div>
              <div className="mb-2">
                <strong>Owners:</strong>
                <div className="ml-2">
                  {safe.owners.map(o => (
                    <div key={o.value}>{o.name || o.value}</div>
                  ))}
                </div>
              </div>
              {showHidden && (
                <div className="balances mb-2">
                  Hidden Balance: {Math.floor(Math.random() * 100)} ETH
                </div>
              )}
              <div>Threshold: {safe.threshold}</div>
            </div>
          ))
        )}
      </main>
    </div>
  )
}
