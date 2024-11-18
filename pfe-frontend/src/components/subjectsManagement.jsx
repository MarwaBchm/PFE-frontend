import React, { useState } from "react";

const SubjectsManagement = () => {
  // State to manage the current view
  const [userRole, setUserRole] = useState("Professor");

  // Function to switch user roles
  const handleRoleChange = (role) => {
    setUserRole(role);
  };

  // Data for Professors
  const [professorsData] = useState([
    { title: "Plateforme de gestion des ressources humaines avec IA", professor: "Boucham Mohamed", status: "Pending" },
    { title: "Application de diagnostic médical basée sur l'apprentissage automatique", professor: "Aissaoui Reda", status: "Pending" },
    { title: "Système de recommandation pour e-commerce", professor: "Kamili Amel", status: "Pending" },
    { title: "Solution de détection de fraudes en temps réel", professor: "Kazi Khadidja", status: "Pending" },
    { title: "Outil de gestion de projets collaboratif avec méthodologies agiles", professor: "Tabet Malek", status: "Pending" },
    { title: "Application de suivi et d'analyse de performance pour les étudiants", professor: "Rahmani Abdelaziz", status: "Pending" },
    { title: "Système de maintenance prédictive pour l'industrie", professor: "Bentoumi Amir", status: "Pending" },
    { title: "Plateforme d'apprentissage adaptatif pour l'éducation en ligne", professor: "Kisi Farah", status: "Pending" },
  ]);

  // Data for Companies
  const [companiesData] = useState([
    { title: "Solution de gestion intelligente des stocks", company: "Amazon", status: "Pending" },
    { title: "Système de suivi de santé des employés", company: "SAP", status: "Pending" },
    { title: "Application de gestion de la relation client (CRM)", company: "Salesforce", status: "Pending" },
    { title: "Plateforme de recommandation de contenu personnalisé", company: "Netflix", status: "Pending" },
    { title: "Système de surveillance de la cybersécurité en temps réel", company: "IBM", status: "Pending" },
    { title: "Application d'optimisation énergétique pour les bâtiments intelligents", company: "Schneider Electric", status: "Pending" },
  ]);

  // Data for Student Suggestions
  const [submittedIdeas, setSubmittedIdeas] = useState([]);

  // State for Student View
  const [innovativeIdea, setInnovativeIdea] = useState("");
  const [description, setDescription] = useState("");
  const [popupContent, setPopupContent] = useState(null);

  // Handle adding a new idea
  const handleAddIdea = () => {
    if (innovativeIdea.trim() && description.trim()) {
      setSubmittedIdeas([...submittedIdeas, { title: innovativeIdea, description, status: "Waiting" }]);
      setInnovativeIdea("");
      setDescription("");
    }
  };

  // Handle validation and refusal
  const handleValidation = (item, dataSetter) => {
    dataSetter((prev) =>
      prev.map((suggestion) => (suggestion.title === item.title ? { ...suggestion, status: "Validated" } : suggestion))
    );
  };

  const handleRefusal = (item, dataSetter) => {
    dataSetter((prev) =>
      prev.map((suggestion) => (suggestion.title === item.title ? { ...suggestion, status: "Refused" } : suggestion))
    );
  };

  // Handle showing and closing the popup
  const handleShowPopup = (content) => {
    setPopupContent(content);
  };
  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="p-8 min-h-screen text-gray-800">
      <h1 className="text-4xl font-semibold text-indigo-700 mb-8">Themes</h1>

      {/* Role Selection */}
      <div className="mb-4">
        <button onClick={() => handleRoleChange("Professor")} className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Professor View
        </button>
        <button onClick={() => handleRoleChange("Company")} className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Company View
        </button>
        <button onClick={() => handleRoleChange("Student")} className="mr-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Student View
        </button>
        <button onClick={() => handleRoleChange("ProfResponsable")} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Prof Responsable View
        </button>
      </div>

      {/* Student View */}
      {userRole === "Student" && (
  <div className="space-y-10">
    {/* Suggested by Professors */}
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-500 mb-3">
        Suggested <span className="text-sm text-gray-400">by professors</span>
      </h2>
      <table className="w-full text-sm text-gray-700">
        <thead className="text-gray-400 border-b">
          <tr>
            <th className="py-3 text-left font-medium">Titles</th>
            <th className="py-3 text-left font-medium">Professor Name</th>
            <th className="py-3 text-center font-medium">Details</th>
            <th className="py-3 text-center font-medium">Choose</th>
          </tr>
        </thead>
        <tbody>
          {professorsData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-2">{item.title}</td>
              <td className="py-3 px-2">{item.professor}</td>
              <td className="py-3 text-center">
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
                  Check
                </button>
              </td>
              <td className="py-3 text-center">
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 transition">
                  Pick
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Suggested by Companies */}
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-500 mb-3">
        Suggested <span className="text-sm text-gray-400">by companies</span>
      </h2>
      <table className="w-full text-sm text-gray-700">
        <thead className="text-gray-400 border-b">
          <tr>
            <th className="py-3 text-left font-medium">Titles</th>
            <th className="py-3 text-left font-medium">Company</th>
            <th className="py-3 text-center font-medium">Details</th>
            <th className="py-3 text-center font-medium">Choose</th>
          </tr>
        </thead>
        <tbody>
          {companiesData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-2">{item.title}</td>
              <td className="py-3 px-2">{item.company}</td>
              <td className="py-3 text-center">
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
                  Check
                </button>
              </td>
              <td className="py-3 text-center">
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 transition">
                  Pick
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Suggest an Innovative Idea */}
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-500 mb-3">
        Suggest an innovative idea <span className="text-sm text-gray-400">by you</span>
      </h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={innovativeIdea}
          onChange={(e) => setInnovativeIdea(e.target.value)}
          placeholder="Title"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 transition"
        />
        <button onClick={handleAddIdea} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Add
        </button>
      </div>
    </div>
  </div>
)}

{/* Professor View */}
{userRole === "Professor" && (
  <div className="space-y-10">
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-500 mb-3">
        Your Projects <span className="text-sm text-gray-400">suggested by you</span>
      </h2>
      <table className="w-full text-sm text-gray-700">
        <thead className="text-gray-400 border-b">
          <tr>
            <th className="py-3 text-left font-medium">Title</th>
            <th className="py-3 text-left font-medium">Status</th>
            <th className="py-3 text-center font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {professorsData.slice(0, 3).map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-2">{item.title}</td>
              <td className="py-3 px-2">{item.status}</td>
              <td className="py-3 text-center">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                  Edit
                </button>
                {item.status === "Pending" && (
                  <button className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Add New Project */}
    {professorsData.length < 3 && (
      <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
        <h2 className="text-lg font-semibold text-gray-500 mb-3">Add a New Project</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 transition"
          />
          <textarea
            placeholder="Project Description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 transition"
          ></textarea>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Add Project
          </button>
        </div>
      </div>
    )}
  </div>
)}


      {/* Prof Responsable View */}
      {userRole === "ProfResponsable" && (
        <>
          {/* Suggested by Companies */}
          <div className="rounded-xl border border-gray-300 shadow-md mb-8">
            <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
              Suggested <span className="text-sm text-gray-400">by companies</span>
            </h2>
            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-2 px-4 text-left">Titles</th>
                  <th className="py-2 px-4 text-center">Description</th>
                  <th className="py-2 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {companiesData.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4 text-left">{item.title}</td>
                    <td className="py-2 px-4 text-center">
                      <button onClick={() => handleShowPopup(item)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                        Check
                      </button>
                    </td>
                    <td className="py-2 px-4 text-center">
                      {item.status === "Pending" ? (
                        <>
                          <button
                            onClick={() => handleValidation(item, setCompaniesData)}
                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                          >
                            Validate
                          </button>
                          <button
                            onClick={() => handleRefusal(item, setCompaniesData)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Refuse
                          </button>
                        </>
                      ) : (
                        <span>{item.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Suggested by Professors */}
          <div className="rounded-xl border border-gray-300 shadow-md mb-8">
            <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
              Suggested <span className="text-sm text-gray-400">by professors</span>
            </h2>
            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-2 px-4 text-left">Titles</th>
                  <th className="py-2 px-4 text-center">Description</th>
                  <th className="py-2 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {professorsData.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4 text-left">{item.title}</td>
                    <td className="py-2 px-4 text-center">
                      <button onClick={() => handleShowPopup(item)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                        Check
                      </button>
                    </td>
                    <td className="py-2 px-4 text-center">
                      {item.status === "Pending" ? (
                        <>
                          <button
                            onClick={() => handleValidation(item, setProfessorsData)}
                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                          >
                            Validate
                          </button>
                          <button
                            onClick={() => handleRefusal(item, setProfessorsData)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Refuse
                          </button>
                        </>
                      ) : (
                        <span>{item.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Suggested by Students */}
          <div className="rounded-xl border border-gray-300 shadow-md">
            <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
              Suggested <span className="text-sm text-gray-400">by students</span>
            </h2>
            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-2 px-4 text-left">Titles</th>
                  <th className="py-2 px-4 text-center">Description</th>
                  <th className="py-2 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {submittedIdeas.map((idea, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4 text-left">{idea.title}</td>
                    <td className="py-2 px-4 text-center">
                      <button onClick={() => handleShowPopup(idea)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                        Check
                      </button>
                    </td>
                    <td className="py-2 px-4 text-center">
                      {idea.status === "Waiting" ? (
                        <>
                          <button
                            onClick={() => handleValidation(idea, setSubmittedIdeas)}
                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                          >
                            Validate
                          </button>
                          <button
                            onClick={() => handleRefusal(idea, setSubmittedIdeas)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Refuse
                          </button>
                        </>
                      ) : (
                        <span>{idea.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Popup for Details */}
      {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-3">{popupContent.title}</h3>
            <p className="text-gray-700 mb-4">{popupContent.professor ? `Professor: ${popupContent.professor}` : `Company: ${popupContent.company}`}</p>
            <p className="text-gray-500">Additional details about the project can be shown here.</p>
            <button onClick={handleClosePopup} className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsManagement;
