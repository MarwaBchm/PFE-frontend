import React, { useState } from "react";

const StudentList = () => {
  const [students] = useState([
    {
      id: 1,
      fullName: "Ahmed Mustafa",
      email: "ahmed@univ-tlemcen.dz",
      major: "Artificial Intelligence",
      ranking: "21st",
      chosenSubject: "Autonomous Vehicle Control Systems",
      masterAverage: 19.5,
      projectType: "Classic",
    },
    {
      id: 2,
      fullName: "Amina Khaled",
      email: "amina@univ-tlemcen.dz",
      major: "Artificial Intelligence",
      ranking: "15th",
      chosenSubject: "Deep Learning for Medical Imaging",
      masterAverage: 19.0,
      projectType: "Innovant",
    },
    {
      id: 3,
      fullName: "Mohammed Ali",
      email: "mohammed@univ-tlemcen.dz",
      major: "Software Engineering",
      ranking: "2nd",
      chosenSubject: "Web Application Development",
      masterAverage: 16.0,
      projectType: "Classic",
    },
    {
      id: 4,
      fullName: "Layla Nasser",
      email: "layla@univ-tlemcen.dz",
      major: "Information Systems",
      ranking: "5th",
      chosenSubject: "Cloud-based ERP Solutions",
      masterAverage: 17.3,
      projectType: "Innovant",
    },
    {
      id: 5,
      fullName: "Omar Saeed",
      email: "omar@univ-tlemcen.dz",
      major: "Artificial Intelligence",
      ranking: "1st",
      chosenSubject: "Natural Language Processing for Arabic Texts",
      masterAverage: 14.8,
      projectType: "Innovant",
    },
    {
      id: 6,
      fullName: "Salma Ahmed",
      email: "salma@univ-tlemcen.dz",
      major: "Software Engineering",
      ranking: "10th",
      chosenSubject: "Mobile App Development",
      masterAverage: 18.0,
      projectType: "Classic",
    },
    {
      id: 7,
      fullName: "Youssef Hassan",
      email: "youssef@univ-tlemcen.dz",
      major: "Network Systems",
      ranking: "19th",
      chosenSubject: "SDN and Network Security",
      masterAverage: 18.7,
      projectType: "Classic",
    },
    {
      id: 8,
      fullName: "Nour El-Din",
      email: "nour@univ-tlemcen.dz",
      major: "Network Systems",
      ranking: "3rd",
      chosenSubject: "5G Network Optimization",
      masterAverage: 15.5,
      projectType: "NULL",
    },
    {
      id: 9,
      fullName: "Fatima Zahra",
      email: "fatima@univ-tlemcen.dz",
      major: "Information Systems",
      ranking: "7th",
      chosenSubject: "Data Analytics for Business Intelligence",
      masterAverage: 13.9,
      projectType: "NULL",
    },
    {
      id: 10,
      fullName: "Karim Fathi",
      email: "karim@univ-tlemcen.dz",
      major: "Network Systems",
      ranking: "4th",
      chosenSubject: "IoT Security and Privacy",
      masterAverage: 17.9,
      projectType: "NULL",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  /// Helper function to get ordinal ranking
  const getOrdinal = (rank) => {
    const rankNumber = parseInt(rank, 10);
    const suffixes = ["th", "st", "nd", "rd"];
    const v = rankNumber % 100;
    const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
    return `${rankNumber}${suffix}`;
  };

  // Helper function to get ranking color
  const getRankingColor = (rank) => {
    const rankNumber = parseInt(rank, 10);
    if (rankNumber <= 10) return "text-green-1";
    if (rankNumber <= 20) return "text-orange-1";
    return "text-red-1";
  };

  return (
    <div className="student-list bg-white rounded-xl p-2 pt-4">
      <div className="flex flex-row items-center justify-between pr-2 text-xl text-blue-2 font-semibold mb-4 pl-2">
        <p>Students</p>
        <button className="bg-blue-5 bg-opacity-80 rounded-md py-1 px-3 text-white text-xs">
          Add a new student
        </button>
      </div>

      {/* Column Headers */}
      <div className="flex justify-start items-center pl-2 pb-1 border-b border-gray-300 font-medium text-gray-3 text-xs font-Roboto">
        <div className="w-[28%] flex justify-start items-start">Student</div>
        <div className="w-[18%] flex justify-start items-start lg:block md:hidden sm:hidden">
          Major
        </div>
        <div className="w-1/5 flex justify-start items-start lg:block md:hidden sm:hidden">
          Average Mark | Ranking
        </div>
        <div className="w-1/6 flex justify-start items-start lg:block md:hidden sm:hidden">
          Subject type
        </div>
      </div>

      {/* Scrollable List of Students */}
      <div className="max-h-56 overflow-y-auto">
        <ul className="list-none p-0">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center p-2 border-b border-gray-200"
            >
              <div className="flex flex-row justify-start items-center gap-1.5 text-14 lg:w-[28%] md:1/2">
                <img src="/list.png" className="w-9 h-10 rounded-xl" />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-medium text-blue-2">{student.fullName}</p>
                  <p className="text-xs text-gray-4">{student.email}</p>
                </div>
              </div>
              <div className="w-[22%] lg:block md:hidden sm:hidden flex justify-start items-start font-Roboto text-13">
                {student.major}
              </div>
              <div className="w-[19%]   flex flex-row   gap-1 justify-center  items-center font-Roboto text-13">
                <p className="text-blue-2 font-Arial font-semibold">
                  {student.masterAverage}
                </p>
                <p className="text-gray-3 font-bold">|</p>
                <p className={getRankingColor(student.ranking)}>
                  {getOrdinal(student.ranking)}
                </p>
              </div>
              <div className="flex  w-[12%] lg:block md:hidden sm:hidden text-13 font-Roboto">
                {student.projectType}
              </div>
              <div className="flex flex-row justify-between items-center gap-1">
                <button
                  className="text-gray-3 hover:bg-gray-100 rounded-md py-1 px-2 text-xs font-Roboto"
                  onClick={handleEditClick}
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
            <h3 className="text-lg font-bold mb-4">Edit Student</h3>
            <p>
              <strong>Full Name:</strong> {selectedStudent.fullName}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
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

export default StudentList;
