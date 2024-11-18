import React, { useState } from "react";

const ProfessorList = () => {
  const [professors] = useState([
    {
      id: 1,
      fullName: "Dr. Amina Bouzid",
      email: "bouzid@univ-tlemcen.dz",
      grade: "Professeur",
      recruitmentDate: "2010-09-15",
    },
    {
      id: 2,
      fullName: "Dr. Yassine Belkhir",
      email: "belkhir@univ-tlemcen.dz",
      grade: "Maitre de Conférences A",
      recruitmentDate: "2015-02-20",
    },
    {
      id: 3,
      fullName: "Dr. Souad Khaled",
      email: "khaled@univ-tlemcen.dz",
      grade: "Maitre de Conférences B",
      recruitmentDate: "2018-11-30",
    },
    {
      id: 4,
      fullName: "Dr. Samir Benali",
      email: "benali@univ-tlemcen.dz",
      grade: "Maitre Assistant A",
      recruitmentDate: "2020-01-10",
    },
    {
      id: 5,
      fullName: "Dr. Fatima Bensalem",
      email: "bensalem@univ-tlemcen.dz",
      grade: "Maitre Assistant B",
      recruitmentDate: "2022-05-18",
    },
  ]);

  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (professor) => {
    setSelectedProfessor(professor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfessor(null);
  };

  // Helper function to get recruitment year
  const getRecruitmentYear = (date) => {
    return new Date(date).getFullYear();
  };

  return (
    <div className="professor-list bg-white rounded-xl p-2 pt-4 mb-6 shadow-sm">
      <div className="flex flex-row items-center justify-between pr-2 text-xl text-blue-2 font-semibold mb-4 pl-2">
        <p>Professors</p>
        <button className="bg-blue-5 bg-opacity-75 rounded-md py-1 px-3 text-white text-xs">
          Add a new professor
        </button>
      </div>

      {/* Column Headers */}
      <div className="flex justify-start items-center pl-2 pb-1 border-b border-gray-300 font-medium text-gray-3 text-xs font-Roboto">
        <div className="w-[32%] flex justify-start items-start">Professor</div>
        <div className="w-[20%] flex justify-start items-start">Grade</div>
        <div className="w-[20%] flex justify-center items-start ">
          Recruitment Year
        </div>
      </div>

      {/* Scrollable List of Professors */}
      <div className="max-h-72 overflow-y-auto">
        <ul className="list-none p-0">
          {professors.map((professor) => (
            <li
              key={professor.id}
              className="flex justify-start items-center p-2 border-b border-gray-200"
            >
              <div className="flex flex-row justify-start  items-start gap-1.5 text-14 w-[32%]">
                <img src="/list.jpg" className="w-9 rounded-xl" />
                <div className="flex flex-col justify-between items-start">
                  <p className="font-medium text-13 text-blue-2">
                    {professor.fullName}
                  </p>
                  <p className="text-11 text-gray-4">{professor.email}</p>
                </div>
              </div>
              <div className="w-[22%] flex justify-start items-start font-Roboto text-12">
                {professor.grade}
              </div>
              <div className="w-[20%] flex justify-center items-start font-Roboto text-13">
                {getRecruitmentYear(professor.recruitmentDate)}
              </div>
              <div className="flex flex-row justify-end items-center gap-1 w-[25%]">
                <button
                  className="text-gray-3 hover:bg-gray-100 rounded-md py-1 px-2 text-xs font-Roboto"
                  onClick={() => handleEditClick(professor)}
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

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Edit Professor</h3>
            <p>
              <strong>Full Name:</strong> {selectedProfessor.fullName}
            </p>
            <p>
              <strong>Email:</strong> {selectedProfessor.email}
            </p>
            <p>
              <strong>Grade:</strong> {selectedProfessor.grade}
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

export default ProfessorList;
