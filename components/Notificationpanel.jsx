import React from 'react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div className="bg-gray-950 text-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-2">Vault Notifications</h2>
      <ul className="space-y-2">
        {notifications.length === 0 ? (
          <li className="text-gray-500">No alerts. All systems go 🚀</li>
        ) : (
          notifications.map((note, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded text-sm border-l-4 border-green-500">
              <strong>{note.title}</strong>
              <p className="text-gray-400">{note.message}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotificationPanel;
