import React, { useState } from "react";

const SubjectsManagement = () => {
  const professorsData = [
    { title: "Plateforme de gestion des ressources humaines avec IA", professor: "Boucham Mohamed" },
    { title: "Application de diagnostic médical basée sur l'apprentissage automatique", professor: "Aissaoui Reda" },
    { title: "Système de recommandation pour e-commerce", professor: "Kamili Amel" },
    { title: "Solution de détection de fraudes en temps réel", professor: "Kazi Khadidja" },
    { title: "Outil de gestion de projets collaboratif avec méthodologies agiles", professor: "Tabet Malek" },
    { title: "Application de suivi et d'analyse de performance pour les étudiants", professor: "Rahmani AbdeAbdelaziz" },
    { title: "Système de maintenance prédictive pour l'industrie", professor: "Bentoumi Amir" },
    { title: "Plateforme d'apprentissage adaptatif pour l'éducation en ligne", professor: "Kisi Farah" },
  ];

  const companiesData = [
    { title: "Solution de gestion intelligente des stocks", company: "Amazon", professor: "Boucham Mohamed" },
    { title: "Système de suivi de santé des employés", company: "SAP", professor: "Rahou yessine" },
    { title: "Application de gestion de la relation client (CRM)", company: "Salesforce", professor: "Kamili Amel" },
    { title: "Plateforme de recommandation de contenu personnalisé", company: "Netflix", professor: "Kazi Khadidja" },
    { title: "Système de surveillance de la cybersécurité en temps réel", company: "IBM", professor: "Tabet Malek" },
    { title: "Application d'optimisation énergétique pour les bâtiments intelligents", company: "Schneider Electric", professor: "Rahmani AbdeAbdelaziz" },
  ];

  const [innovativeIdea, setInnovativeIdea] = useState("");
  const [submittedIdeas, setSubmittedIdeas] = useState([]);

  const handleAddIdea = () => {
    if (innovativeIdea.trim()) {
      setSubmittedIdeas([...submittedIdeas, { title: innovativeIdea, status: "Waiting" }]);
      setInnovativeIdea("");
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Themes</h1>

      {/* Suggested by Professors */}
      <div className="mb-8 rounded-lg border border-gray-300 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-600 p-4 border-b border-gray-300 rounded-t-lg">
          Suggested <span className="text-sm text-gray-400">by professors</span>
        </h2>
        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="py-3 px-4">Titles</th>
              <th className="py-3 px-4">Professor Name</th>
              <th className="py-3 px-4">Details</th>
              <th className="py-3 px-4">Choose</th>
            </tr>
          </thead>
          <tbody>
            {professorsData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">{item.professor}</td>
                <td className="py-3 px-4">
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
                    Check
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Pick
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suggested by Companies */}
      <div className="mb-8 rounded-lg border border-gray-300 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-600 p-4 border-b border-gray-300 rounded-t-lg">
          Suggested <span className="text-sm text-gray-400">by companies</span>
        </h2>
        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="py-3 px-4">Titles</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Professor Name</th>
              <th className="py-3 px-4">Details</th>
              <th className="py-3 px-4">Choose</th>
            </tr>
          </thead>
          <tbody>
            {companiesData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">{item.company}</td>
                <td className="py-3 px-4">{item.professor}</td>
                <td className="py-3 px-4">
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
                    Check
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Pick
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suggest an Innovative Idea */}
      <div className="rounded-lg border border-gray-300 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-600 p-4 border-b border-gray-300 rounded-t-lg">
          Suggest an innovative idea <span className="text-sm text-gray-400">by you</span>
        </h2>
        <div className="p-4 flex items-center gap-2">
          <input
            type="text"
            value={innovativeIdea}
            onChange={(e) => setInnovativeIdea(e.target.value)}
            placeholder="Title"
            className="border border-gray-300 rounded-md px-3 py-1 flex-grow focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddIdea}
            className="bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

        {/* Display Submitted Ideas */}
        {submittedIdeas.length > 0 && (
          <div className="p-4">
            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {submittedIdeas.map((idea, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4">{idea.title}</td>
                    <td className="py-2 px-4 text-indigo-500">{idea.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectsManagement;
