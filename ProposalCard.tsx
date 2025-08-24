import { Box, Text, Button, Badge, VStack } from '@chakra-ui/react'

interface Proposal {
  id: string
  title: string
  status: 'pending' | 'executed' | 'failed'
  createdAt: string
}

export default function ProposalCard({ proposal }: { proposal: Proposal }) {
  return (
    <Box bg="gray.900" p={4} borderRadius="md" border="1px solid #333">
      <Text fontSize="lg" fontWeight="bold">{proposal.title}</Text>
      <Badge mt={2} colorScheme={
        proposal.status === 'executed' ? 'green' :
        proposal.status === 'failed' ? 'red' : 'yellow'
      }>
        {proposal.status.toUpperCase()}
      </Badge>
      <Text fontSize="sm" mt={2}>Created: {proposal.createdAt}</Text>
      {proposal.status === 'pending' && (
        <Button mt={4} colorScheme="teal">Vote Now</Button>
      )}
    </Box>
  )
}
