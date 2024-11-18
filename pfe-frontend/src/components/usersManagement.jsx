// UsersManagement.jsx
import React from "react";
import StudentList from "./ui/studentsList";
import ProfessorList from "./ui/professorsList";
import CompanyList from "./ui/companiesList";
const UsersManagement = () => {
  return (
    <div className="flex flex-row w-full  justify-start items-start  relative ">
      <div className="flex flex-col gap-5 w-[70%] ">
        <StudentList />
        <ProfessorList />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 relative    pl-2 ">
        <button className="flex flex-row justify-start items-start text-white text-14 font-Arial    rounded-md hover:bg-green-400 ">
          <p className="py-1 px-7 pr-14 bg-green-1 rounded-md bg-opacity-90">
            Import from CSV file
          </p>{" "}
        </button>
        <img
          src="/down-arrow.png"
          className="h-7  absolute right-16 -top-0.5 m-0.5 mr-! bg-black bg-opacity-30 rounded-md p-1"
        />
        <CompanyList />
      </div>
      <img
        src="/settings.png"
        className="absolute bottom-0 right-0 opacity-20 w-52 "
      />
    </div>
  );
};

export default UsersManagement;
