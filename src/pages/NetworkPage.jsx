// src/pages/NetworkPage.jsx
import { Link } from 'react-router-dom';

const NetworkPage = () => {
  const generateConnections = (count) => {
    const titles = [
      "Senior Product Manager at Flipkart",
      "Lead UX Designer at Zomato",
      "Data Scientist at TCS",
      "Backend Developer at Swiggy",
      "Marketing Lead at Nykaa",
      "Frontend Developer at Amazon",
      "HR Manager at Infosys",
      "Business Analyst at Paytm",
      "DevOps Engineer at Microsoft",
      "Content Writer at Netflix"
    ];
    
    const connections = [];
    
    for (let i = 1; i <= count; i++) {
      const isFemale = Math.random() > 0.5;
      const gender = isFemale ? 'women' : 'men';
      const id = Math.floor(Math.random() * 100) + 1;
      
      connections.push({
        id: i,
        name: isFemale 
          ? `Priya Sharma ${i}` 
          : `Rahul Kapoor ${i}`,
        title: titles[Math.floor(Math.random() * titles.length)],
        avatar: `https://randomuser.me/api/portraits/${gender}/${id}.jpg`,
        mutualConnections: Math.floor(Math.random() * 10) + 1
      });
    }
    
    return connections;
  };

  const connections = generateConnections(100);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Network ({connections.length})</h1>
        
        <div className="space-y-4">
          {connections.map((person) => (
            <div key={person.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src={person.avatar} 
                  alt={person.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.title}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {person.mutualConnections} mutual connection{person.mutualConnections !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
                  Connect
                </button>
                <button className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;