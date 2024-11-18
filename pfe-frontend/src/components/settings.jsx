import { useState } from 'react';

export default function Settings() {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1234567890');
  const [password, setPassword] = useState('');
  const [nightMode, setNightMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSaveChanges = () => {
    // Handle save changes logic here
    alert('Changes saved successfully!');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      {/* Personal Information Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
            />
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Night Mode</span>
          <button
            onClick={() => setNightMode(!nightMode)}
            className={`${
              nightMode ? 'bg-indigo-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
          >
            <span
              className={`${
                nightMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Enable Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`${
              notifications ? 'bg-indigo-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
          >
            <span
              className={`${
                notifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </button>
        </div>
      </div>

      {/* Save Changes Button */}
      <button
        onClick={handleSaveChanges}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
      >
        Save Changes
      </button>
    </div>
  );
}
