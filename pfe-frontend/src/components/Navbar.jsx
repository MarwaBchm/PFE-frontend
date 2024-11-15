import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Dashboard</div>
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Log Out
        </button>hhhhhh
      </div>
    </div>
  );
};

export default Navbar;
