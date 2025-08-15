import SafeAppsSDK from '@safe-global/safe-apps-sdk';
import { isSafeAppIframe } from '../utils/detectSafeContext';

let sdk: SafeAppsSDK | null = null;

export const useSafePlatform = () => {
  const isIframe = isSafeAppIframe();

  const connect = async () => {
    if (isIframe) {
      // Desktop iframe context
      if (!sdk) sdk = new SafeAppsSDK();
      const safeInfo = await sdk.safe.getInfo();
      console.log("✅ Safe Apps SDK connected", safeInfo);
      return { sdk, context: 'safe-apps-sdk', safeInfo };
    } else {
      // Mobile WalletConnect context via Reown
      const { AppKit } = window.Reown; // Assume Reown is globally available
      await AppKit.Unity.Connector.TryResumeSessionAsync();
      const session = await AppKit.SignClient().session.get();
      console.log("📱 Reown.AppKit WalletConnect session", session);
      return { appkit: AppKit, context: 'reown-appkit', session };
    }
  };

  return { connect };
};
