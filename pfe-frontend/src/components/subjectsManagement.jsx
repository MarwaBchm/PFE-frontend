import React, { useState } from "react";

const SubjectsManagement = () => {
  const professorsData = [
    { title: "Plateforme de gestion des ressources humaines avec IA", professor: "Boucham Mohamed" },
    { title: "Application de diagnostic médical basée sur l'apprentissage automatique", professor: "Aissaoui Reda" },
    { title: "Système de recommandation pour e-commerce", professor: "Kamili Amel" },
    { title: "Solution de détection de fraudes en temps réel", professor: "Kazi Khadidja" },
    { title: "Outil de gestion de projets collaboratif avec méthodologies agiles", professor: "Tabet Malek" },
    { title: "Application de suivi et d'analyse de performance pour les étudiants", professor: "Rahmani Abdelaziz" },
    { title: "Système de maintenance prédictive pour l'industrie", professor: "Bentoumi Amir" },
    { title: "Plateforme d'apprentissage adaptatif pour l'éducation en ligne", professor: "Kisi Farah" },
  ];

  const companiesData = [
    { title: "Solution de gestion intelligente des stocks", company: "Amazon", professor: "Boucham Mohamed" },
    { title: "Système de suivi de santé des employés", company: "SAP", professor: "Rahou Yessine" },
    { title: "Application de gestion de la relation client (CRM)", company: "Salesforce", professor: "Kamili Amel" },
    { title: "Plateforme de recommandation de contenu personnalisé", company: "Netflix", professor: "Kazi Khadidja" },
    { title: "Système de surveillance de la cybersécurité en temps réel", company: "IBM", professor: "Tabet Malek" },
    { title: "Application d'optimisation énergétique pour les bâtiments intelligents", company: "Schneider Electric", professor: "Rahmani Abdelaziz" },
  ];

  const [innovativeIdea, setInnovativeIdea] = useState("");
  const [description, setDescription] = useState("");
  const [submittedIdeas, setSubmittedIdeas] = useState([]);
  const [popupContent, setPopupContent] = useState(null);

  const handleAddIdea = () => {
    if (innovativeIdea.trim() && description.trim()) {
      setSubmittedIdeas([...submittedIdeas, { title: innovativeIdea, description, status: "Waiting" }]);
      setInnovativeIdea("");
      setDescription("");
    }
  };

  const handleShowPopup = (content) => {
    setPopupContent(content);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="p-8 min-h-screen text-gray-800">
      <h1 className="text-4xl font-semibold text-indigo-700 mb-8">Themes</h1>

      {/* Suggested by Professors */}
      <div className="mb-8 rounded-xl border border-gray-300 shadow-md">
        <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
          Suggested <span className="text-sm text-gray-400">by professors</span>
        </h2>
        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="py-2 px-4 text-left">Titles</th>
              <th className="py-2 px-4 text-center">Professor Name</th>
              <th className="py-2 px-4 text-center">Details</th>
              <th className="py-2 px-4 text-center">Choose</th>
            </tr>
          </thead>
          <tbody>
            {professorsData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-4 text-left">{item.title}</td>
                <td className="py-2 px-4 text-center">{item.professor}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleShowPopup(item)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
                  >
                    Check
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400">
                    Pick
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suggested by Companies */}
      <div className="mb-8 rounded-xl border border-gray-300 shadow-md">
        <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
          Suggested <span className="text-sm text-gray-400">by companies</span>
        </h2>
        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="py-2 px-4 text-left">Titles</th>
              <th className="py-2 px-4 text-center">Company</th>
              <th className="py-2 px-4 text-center">Professor Name</th>
              <th className="py-2 px-4 text-center">Details</th>
              <th className="py-2 px-4 text-center">Choose</th>
            </tr>
          </thead>
          <tbody>
            {companiesData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-4 text-left">{item.title}</td>
                <td className="py-2 px-4 text-center">{item.company}</td>
                <td className="py-2 px-4 text-center">{item.professor}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleShowPopup(item)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
                  >
                    Check
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400">
                    Pick
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suggest an Innovative Idea */}
      <div className="rounded-xl border border-gray-300 shadow-md">
        <h2 className="text-lg font-medium text-gray-700 p-4 border-b border-gray-300">
          Suggest an innovative idea <span className="text-sm text-gray-400">by you</span>
        </h2>
        <div className="p-4 flex flex-col gap-3">
          <input
            type="text"
            value={innovativeIdea}
            onChange={(e) => setInnovativeIdea(e.target.value)}
            placeholder="Title"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleAddIdea}
            className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 self-start"
          >
            Add
          </button>
        </div>

        {/* Display Submitted Ideas */}
        {submittedIdeas.length > 0 && (
          <div className="p-4">
            <table className="w-full text-sm text-center">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-1 px-4 border-b text-left">Title</th>
                  <th className="py-1 px-4 border-b text-center">Description</th>
                  <th className="py-1 px-4 border-b text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {submittedIdeas.map((idea, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-1 px-4 text-left">{idea.title}</td>
                    <td className="py-1 px-4 text-center">{idea.description}</td>
                    <td className="py-1 px-4 text-center text-indigo-600">{idea.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Popup for Details */}
      {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-3">{popupContent.title}</h3>
            <p className="text-gray-700 mb-4">Professor: {popupContent.professor}</p>
            <p className="text-gray-500">Additional details about the project can be shown here.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsManagement;
