import { Box, Grid, Heading, VStack } from '@chakra-ui/react';
import VaultCard from './VaultCard';
import ProposalTracker from './ProposalTracker';
import TransactionFeed from './TransactionFeed';
import { DASHBOARD_CONFIG } from '../config/dashboard.config';

export default function AdminDashboard() {
  const vaults = DASHBOARD_CONFIG.vaults;

  return (
    <Box bg="gray.950" minH="100vh" p={6} color="white">
      <Heading mb={6} fontSize="2xl">🧠 SafeVault Admin Dashboard</Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {vaults.map((vault, index) => (
          <VaultCard key={index} {...vault} />
        ))}
      </Grid>

      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={6} mt={10}>
        <ProposalTracker />
        <TransactionFeed />
      </Grid>
    </Box>
  );
}
