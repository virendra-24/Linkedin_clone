import { dummyUser } from '../data/dummyPosts';
import { FiMoreHorizontal, FiMapPin, FiLink } from 'react-icons/fi';

const ProfileCard = () => {
  // Updated dummy user data with Indian details
  const user = {
    ...dummyUser,
    name: "Virendra Vengurlekar", // Updated to Indian name
    title: "Senior Frontend Developer at Tech Mahindra",
    connections: "543+",
    about: "Passionate about creating beautiful and functional user interfaces with React. Specializing in building accessible and performant web applications for the Indian market.",
    experience: [
      {
        id: 1,
        role: "Senior Frontend Developer",
        company: "Tech Mahindra",
        duration: "2020 - Present",
        description: "Building responsive web applications for banking and financial clients"
      },
      {
        id: 2,
        role: "Frontend Developer",
        company: "Infosys",
        duration: "2018 - 2020",
        description: "Worked on internal tools and client projects using Angular"
      }
    ],
    education: [
      {
        id: 1,
        degree: "B.Tech Computer Science",
        university: "IIT Bombay",
        duration: "2014 - 2018"
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative">
        <div className="absolute bottom-4 right-4">
          <button className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center hover:bg-gray-100">
            <FiMoreHorizontal className="mr-1" />
            Edit
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6 relative">
        <div className="flex justify-between items-start">
          <div className="-mt-20">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-40 h-40 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-200">
              More
            </button>
            <button className="bg-[#0a66c2] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#004182]">
              Connect
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.title}</p>
          
          <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
            <span className="flex items-center">
              <FiMapPin className="mr-1" />
              Mumbai, India
            </span>
            <span className="flex items-center">
              <FiLink className="mr-1" />
              <a href="#" className="text-[#0a66c2] hover:underline">virendravengurlekar.dev</a>
            </span>
          </div>
          
          <div className="mt-3">
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              Open to work
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{user.connections} connections</p>
          </div>
          <button className="text-[#0a66c2] text-sm font-medium hover:underline">
            Contact info
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="border-t px-6 py-4">
        <h3 className="font-medium text-gray-900 mb-2">About</h3>
        <p className="text-sm text-gray-600">{user.about}</p>
        <button className="mt-2 text-[#0a66c2] text-sm font-medium hover:underline">
          Show more
        </button>
      </div>

      {/* Experience Section */}
      <div className="border-t px-6 py-4">
        <h3 className="font-medium text-gray-900 mb-3">Experience</h3>
        {user.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="flex items-start">
              <div className="mr-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">LOGO</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">{exp.role}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
                <p className="text-xs text-gray-500 mt-1">Full-time</p>
                {exp.description && (
                  <p className="text-xs text-gray-500 mt-1">{exp.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
        <button className="text-[#0a66c2] text-sm font-medium hover:underline">
          Show all experiences
        </button>
      </div>

      {/* Education Section */}
      <div className="border-t px-6 py-4">
        <h3 className="font-medium text-gray-900 mb-3">Education</h3>
        {user.education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <div className="flex items-start">
              <div className="mr-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">LOGO</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.university}</p>
                <p className="text-xs text-gray-500">{edu.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;