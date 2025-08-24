import { Box, Text, Badge, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { formatEther } from 'ethers/lib/utils'
import { ethers } from 'ethers'

interface VaultCardProps {
  safeAddress: string
  chainId: number
}

export const VaultCard = ({ safeAddress, chainId }: VaultCardProps) => {
  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(getRpc(chainId))
        const rawBalance = await provider.getBalance(safeAddress)
        setBalance(formatEther(rawBalance))
      } catch (err) {
        setBalance('Error')
      }
    }
    fetchBalance()
  }, [safeAddress, chainId])

  const getRpc = (id: number) => {
    switch (id) {
      case 1: return 'https://mainnet.infura.io/v3/YOUR_KEY'
      case 137: return 'https://polygon-rpc.com'
      default: return 'https://rpc.ankr.com/eth'
    }
  }

  return (
    <Box className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      <Text fontSize="lg" fontWeight="bold">Vault Address</Text>
      <Text fontSize="sm" color="gray.500">{safeAddress}</Text>
      <Text mt={2}>Chain ID: {chainId}</Text>
      <Box mt={4}>
        <Text fontSize="md">ETH Balance:</Text>
        {balance === null ? (
          <Spinner size="sm" />
        ) : (
          <Badge colorScheme="green" fontSize="lg">{balance} ETH</Badge>
        )}
      </Box>
    </Box>
  )
}
