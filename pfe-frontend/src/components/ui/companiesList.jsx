import React, { useState } from "react";

const CompanyList = () => {
  const [companies] = useState([
    {
      id: 1,
      name: "DataMaster",
      email: "contact@DataMaster.com",
      studentsNumber: "02",
      logo: "/DataMaster-logo.jpeg",
    },
    {
      id: 2,
      name: "Sogesie",
      email: "contact@Sogesie.com",
      studentsNumber: "04",

      logo: "/list.png",
    },
    {
      id: 3,
      name: "Naltis",
      email: "support@Naltis.com",
      studentsNumber: "04",

      logo: "/Naltis-logo.png",
    },
    {
      id: 4,
      name: "Azimut",
      email: "hello@Azimut.com",
      studentsNumber: "02",

      logo: "/Azimut-logo.png",
    },
    {
      id: 5,
      name: "Eurequat",
      email: "services@Eurequat.com",
      studentsNumber: "04",

      logo: "/a.png",
    },
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div className="company-list bg-white rounded-xl p-2 pt-4">
      <div className="flex flex-row items-center justify-between pr-2 text-xl text-blue-2 font-semibold mb-4 pl-2">
        <p>Companies</p>
      </div>

      {/* Column Headers */}
      <div className="flex justify-between items-center pl-2 pb-1 border-b border-gray-300 font-medium text-gray-3 text-xs font-Roboto">
        <div className=" flex justify-start items-start w-[40%] ">Company</div>
        <div className=" flex justify-start items-start">Students number</div>
        <div className=" flex justify-start items-start"></div>
      </div>

      {/* Scrollable List of Companies */}
      <div className="max-h-56 overflow-y-auto">
        <ul className="list-none p-0">
          {companies.map((company) => (
            <li
              key={company.id}
              className="flex justify-between items-start p-2 border-b border-gray-200"
            >
              <div className="flex flex-row justify-start items-start gap-2 w-[75%]  ">
                <img
                  src={company.logo}
                  className="w-10 h-10 rounded-xl"
                  alt={`${company.name} logo`}
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-medium text-blue-2">{company.name}</p>
                  <p className="text-xs text-gray-4">{company.email}</p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="font-Arial text-14 pt-1">
                  {company.studentsNumber}
                </p>
              </div>
              <button
                className="text-gray-3 hover:bg-gray-100 rounded-md py-1 px-1 text-xs font-Roboto"
                onClick={() => handleEditClick(company)}
              >
                <img src="/dots.png" className="h-4" alt="hello" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row w-full justify-end pr-3  pt-2">
        {" "}
        <button className="bg-blue-5 bg-opacity-80 rounded-md py-1 px-3 text-white text-xs ">
          Add a new company
        </button>
      </div>
      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Edit Company</h3>
            <p>
              <strong>Name:</strong> {selectedCompany.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedCompany.email}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
// <button className="bg-blue-5 bg-opacity-80 rounded-md py-1 px-3 text-white text-xs">
//Add a new company
//</button>
