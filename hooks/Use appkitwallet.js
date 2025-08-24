import { useEffect, useState } from 'react';
import { connectWallet, getChainId, switchChain } from 'appkit-multichain';

export const useAppKitWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    const init = async () => {
      const connected = await connectWallet();
      setWallet(connected);
      const currentChain = await getChainId();
      setChainId(currentChain);
    };
    init();
  }, []);

  const changeChain = async (targetChainId) => {
    await switchChain(targetChainId);
    setChainId(targetChainId);
  };

  return { wallet, chainId, changeChain };
};
