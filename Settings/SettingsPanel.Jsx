import React from 'react';
import ChainSelector from './ChainSelector';
import AppKitConfig from './AppKitConfig';
import PreferencesToggle from './PreferencesToggle';

const SettingsPanel = () => {
  return (
    <div className="bg-gray-950 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4">Vault Settings</h2>
      <ChainSelector />
      <AppKitConfig />
      <PreferencesToggle />
    </div>
  );
};

export default SettingsPanel;
