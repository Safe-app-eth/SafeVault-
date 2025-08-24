import React from 'react';

const PreferencesToggle = () => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">UI Preferences</h3>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm">Enable Vault Glow</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm">Enable Swipe Gestures</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm">Show Hidden Balances</span>
      </label>
    </div>
  );
};

export default PreferencesToggle;
