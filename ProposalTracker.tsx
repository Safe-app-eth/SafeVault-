import { Box, Text, Badge } from '@chakra-ui/react';

export default function ProposalTracker() {
  return (
    <Box p={4} borderRadius="lg" bg="gray.900" border="1px solid #333">
      <Text fontSize="lg" fontWeight="bold">📜 Governance Proposals</Text>
      <Badge mt={2} colorScheme="yellow">3 Active</Badge>
      <Text mt={2} fontSize="sm">Last proposal: Treasury Rebalance</Text>
    </Box>
  );
}
