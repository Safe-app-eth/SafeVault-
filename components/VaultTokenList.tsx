import { useEffect, useState } from 'react';
import { Box, Text, Badge, Switch, VStack } from '@chakra-ui/react';
import { formatUnits } from 'viem';
import { erc20Abi, createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const tokenList = [
  {
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6
  },
  {
    symbol: 'DAI',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18
  },
  {
    symbol: 'SHIBA',
    address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    decimals: 18
  }
  // Add more tokens here
];

export default function VaultTokenList({ safeAddress }: { safeAddress: `0x${string}` }) {
  const [tokens, setTokens] = useState<any[]>([]);
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    const client = createPublicClient({ chain: mainnet, transport: http() });

    const fetchBalances = async () => {
      const results = await Promise.all(
        tokenList.map(async token => {
          try {
            const balance = await client.readContract({
              address: token.address as `0x${string}`,
              abi: erc20Abi,
              functionName: 'balanceOf',
              args: [safeAddress]
            });
            return {
              ...token,
              balance: parseFloat(formatUnits(balance, token.decimals))
            };
          } catch {
            return null;
          }
        })
      );
      setTokens(results.filter(Boolean));
    };

    fetchBalances();
  }, [safeAddress]);

  return (
    <Box mt={4}>
      <Text fontWeight="bold">Token Balances</Text>
      <Switch mt={2} isChecked={showHidden} onChange={() => setShowHidden(!showHidden)}>
        Show hidden tokens
      </Switch>
      <VStack mt={4} align="start">
        {tokens
          .filter(t => showHidden || t.balance > 0)
          .map((token, idx) => (
            <Box key={idx}>
              <Text>
                {token.symbol}: {token.balance.toFixed(4)}{' '}
                {token.balance === 0 && <Badge ml={2}>🕵️ Hidden</Badge>}
              </Text>
            </Box>
          ))}
      </VStack>
    </Box>
  );
}
