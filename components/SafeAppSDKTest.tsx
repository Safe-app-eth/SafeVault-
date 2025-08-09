// SafeVault/components/SafeAppSDKTest.tsx
import { useEffect, useState } from 'react';
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

const sdk = new SafeAppsSDK();

export default function SafeAppSDKTest() {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    sdk.safe
