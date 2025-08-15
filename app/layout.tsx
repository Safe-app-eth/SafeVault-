import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SafeVault Dashboard',
  description: 'Manage your Safe wallets securely',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
