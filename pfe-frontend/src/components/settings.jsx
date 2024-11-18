import React, { useState } from "react";

const Settings = ({ user }) => {
  // Initial user data (static for now)
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Save changes handler
  const handleSaveChanges = () => {
    setIsEditing(false);
    alert("Changes saved successfully!");
  };

  // Render settings based on user role
  const renderRoleSpecificSettings = () => {
    switch (user.role) {
      case "admin":
        return (
          <div className="mt-4">
            <h2>Admin Settings</h2>
            <ul>
              <li>Manage Users</li>
              <li>System Reports</li>
              <li>Platform Configuration</li>
            </ul>
          </div>
        );
      case "professor":
        return (
          <div className="mt-4">
            <h2>Professor Settings</h2>
            <ul>
              <li>Manage Students</li>
              <li>Project Supervision</li>
              <li>Evaluation Criteria</li>
            </ul>
          </div>
        );
      case "student":
        return (
          <div className="mt-4">
            <h2>Student Settings</h2>
            <ul>
              <li>Project Submission</li>
              <li>View Grades</li>
              <li>Feedback & Reviews</li>
            </ul>
          </div>
        );
      case "company":
        return (
          <div className="mt-4">
            <h2>Company Settings</h2>
            <ul>
              <li>Manage Offers</li>
              <li>Review Applications</li>
              <li>Post New Projects</li>
            </ul>
          </div>
        );
      default:
        return <p>No specific settings available for this role.</p>;
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Personal Information Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Phone:</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              onClick={handleSaveChanges}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {userInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo.phone}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Edit Information
            </button>
          </div>
        )}
      </div>

      {/* Role-Specific Settings */}
      {renderRoleSpecificSettings()}
    </div>
  );
};

export default Settings;
