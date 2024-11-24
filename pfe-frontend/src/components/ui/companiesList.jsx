import React, { useState } from "react";

const CompanyList = ({searchQuery}) => {
  const [companies] = useState([
    {
      id: 1,
      name: "DataMaster",
      email: "contact@DataMaster.com",
      studentsNumber: "02",
      logo: "/DataMaster-logo.jpeg",
      representative: "John Doe",
    },
    {
      id: 2,
      name: "Sogesie",
      email: "contact@Sogesie.com",
      studentsNumber: "04",
      logo: "/Sogesie-logo.PNG",
      representative: "Jane Smith",
    },
    {
      id: 3,
      name: "Naltis",
      email: "support@Naltis.com",
      studentsNumber: "04",
      logo: "/Naltis-logo.PNG",
      representative: "Emily Johnson",
    },
    {
      id: 4,
      name: "Azimut",
      email: "hello@Azimut.com",
      studentsNumber: "02",
      logo: "/Azimut-logo.PNG",
      representative: "Michael Brown",
    },
    {
      id: 5,
      name: "Eurequat",
      email: "services@Eurequat.com",
      studentsNumber: "04",
      logo: "/a.PNG",
      representative: "Sarah Davis",
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
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.studentsNumber.toLowerCase().includes(searchQuery.toLowerCase())||
      company.representative.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="company-list bg-white rounded-xl">
      {/* Column Headers */}
      <div className="flex justify-between items-center pl-2 pb-1 border-b border-gray-300 font-medium text-gray-3 text-xs font-Roboto">
        <div className="flex justify-start items-start w-[30%]">Company</div>
        <div className="flex justify-start items-start w-[30%]">
          Representative
        </div>
        <div className="flex justify-start items-start w-[20%]">
          Students Number
        </div>

        <div className="flex justify-start items-start w-[20%]"></div>
      </div>

      {/* Scrollable List of Companies */}
      <div className="max-h-80 overflow-y-auto">
        <ul className="list-none p-0">
          {filteredCompanies.map((company) => (
            <li
              key={company.id}
              className="flex justify-between items-center p-2 border-b border-gray-200 gap-4"
            >
              <div className="flex flex-row justify-start items-start gap-2 w-[30%]">
                <img
                  src={company.logo}
                  className="w-10 h-10 rounded-xl"
                  alt={`${company.name} logo`}
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-medium text-13 text-blue-2">
                    {company.name}
                  </p>
                  <p className="text-11 text-gray-4">{company.email}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start w-[30%]">
                <p className="text-13 text-gray-600">
                  {company.representative}
                </p>
              </div>
              <div className="flex flex-col justify-center items-start w-[20%]">
                <p className="font-Arial text-14 pt-1 pl-7">
                  {company.studentsNumber}
                </p>
              </div>

              <div className="flex flex-row justify-end items-center gap-1 w-[20%]">
                <button
                  className="text-gray-3 hover:bg-gray-100 rounded-md py-1 px-2 text-xs font-Roboto"
                  onClick={() => handleEditClick(company)}
                >
                  Edit
                </button>
                <button className="text-red-3 bg-red-2 hover:bg-blue-3 rounded-md py-1 px-2 text-xs font-Roboto">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row w-full justify-end pr-3 pt-2"></div>

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
            <p>
              <strong>Representative:</strong> {selectedCompany.representative}
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
