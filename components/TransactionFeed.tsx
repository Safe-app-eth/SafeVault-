import { Box, Text, VStack } from '@chakra-ui/react';

const dummyTxs = [
  { hash: '0xabc...', status: 'Executed', time: '2h ago' },
  { hash: '0xdef...', status: 'Pending', time: '5m ago' }
];

export default function TransactionFeed() {
  return (
    <Box p={4} borderRadius="lg" bg="gray.900" border="1px solid #333">
      <Text fontSize="lg" fontWeight="bold">📈 Transaction Feed</Text>
      <VStack mt={4} align="start">
        {dummyTxs.map((tx, i) => (
          <Text key={i}>
            {tx.hash.slice(0, 10)}... — {tx.status} ({tx.time})
          </Text>
        ))}
      </VStack>
    </Box>
  );
}
