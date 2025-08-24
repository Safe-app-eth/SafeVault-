import React from 'react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div className="bg-gray-950 text-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Vault Notifications</h2>

      {notifications.length === 0 ? (
        <div className="text-gray-500 text-sm">No alerts. All systems go 🚀</div>
      ) : (
        <ul className="space-y-3">
          {notifications.map((note, index) => {
            let borderColor = "border-green-500";
            if (note.type === "warning") borderColor = "border-yellow-500";
            if (note.type === "error") borderColor = "border-red-500";
            if (note.type === "info") borderColor = "border-blue-500";

            return (
              <li
                key={index}
                className={`bg-gray-900 p-3 rounded border-l-4 ${borderColor}`}
              >
                <div className="font-semibold">{note.title}</div>
                <p className="text-gray-400 text-sm">{note.message}</p>
                {note.timestamp && (
                  <p className="text-xs text-gray-600 mt-1">
                    {new Date(note.timestamp).toLocaleString()}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
