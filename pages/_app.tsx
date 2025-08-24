import { ChakraProvider } from '@chakra-ui/react';
import { WagmiConfig } from 'wagmi';
import { wagmiClient } from '../lib/wallet';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  );
}
