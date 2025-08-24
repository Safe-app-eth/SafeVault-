'use client';
import { useEffect, useState } from 'react';
import { Box, Text, Spinner, Badge } from '@chakra-ui/react';
import { formatEther } from 'viem';
import { createPublicClient, http } from 'viem';
import { mainnet, arbitrum } from 'viem/chains';

type VaultProps = {
  name: string;
  chainId: number;
  safeAddress: string;
};

const chainMap = {
  1: mainnet,
  42161: arbitrum
};

export default function VaultCard({ name, chainId, safeAddress }: VaultProps) {
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const client = createPublicClient({
        chain: chainMap[chainId],
        transport: http()
      });
      const bal = await client.getBalance({ address: safeAddress as `0x${string}` });
      setBalance(formatEther(bal));
    };
    fetchBalance();
  }, [chainId, safeAddress]);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} bg="gray.900">
      <Text fontSize="lg" fontWeight="bold">{name}</Text>
      <Badge mt={2} colorScheme={chainId === 1 ? 'blue' : 'purple'}>
        {chainId === 1 ? 'Ethereum Mainnet' : 'Arbitrum'}
      </Badge>
      <Text mt={2} fontSize="sm" color="gray.400">{safeAddress}</Text>
      <Text mt={2}>
        Balance: {balance ? `${balance} ETH` : <Spinner size="sm" />}
      </Text>
    </Box>
  );
}
