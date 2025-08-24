import { createClient, configureChains } from 'wagmi';
import { mainnet, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, arbitrum],
  [publicProvider()]
);

export const wagmiClient = createClient({
  autoConnect: true,
  provider
});
