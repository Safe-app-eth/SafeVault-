import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

export const initializeWalletConnect = () => {
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
  });

  if (!connector.connected) {
    connector.createSession();
    connector.on('display_uri', (uri: string) => {
      QRCodeModal.open(uri, () => {
        console.log('QR Code Modal closed');
      });
    });
  }

  connector.on('connect', (error, payload) => {
    if (error) throw error;

    console.log('Wallet connected:', payload.params[0]);
  });

  connector.on('disconnect', (error) => {
    if (error) throw error;
    console.log('Wallet disconnected');
  });

  return connector;
};
