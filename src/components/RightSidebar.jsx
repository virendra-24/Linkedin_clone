const RightSidebar = () => {
  // Sample data for LinkedIn News
  const newsItems = [
    {
      id: 1,
      title: "Tech hiring slows in Q3 2023",
      excerpt: "Global tech hiring down 15% compared to last quarter",
      time: "2h ago",
      trending: true
    },
    {
      id: 2,
      title: "Remote work becomes permanent at major firms",
      excerpt: "73% of companies now offer fully remote options",
      time: "5h ago"
    },
    {
      id: 3,
      title: "Web3 developer demand surges",
      excerpt: "Blockchain roles up 42% year-over-year",
      time: "1d ago",
      trending: true
    },
    {
      id: 4,
      title: "The great reshuffle continues",
      excerpt: "Professionals prioritizing work-life balance",
      time: "2d ago"
    }
  ];

  // Sample data for People You May Know
  const people = [
    {
      id: 1,
      name: "Priya Sharma",
      title: "Senior Product Manager at Flipkart",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      mutualConnections: 5
    },
    {
      id: 2,
      name: "Rahul Kapoor",
      title: "Lead UX Designer at Zomato",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      mutualConnections: 3
    },
    {
      id: 3,
      name: "Ananya Patel",
      title: "Data Scientist at TCS",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      mutualConnections: 8
    }
  ];

  // Sample data for Trending Courses
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "React Training",
      students: "12,345 enrolled"
    },
    {
      id: 2,
      title: "AI for Business Leaders",
      instructor: "DeepLearning.AI",
      students: "8,765 enrolled"
    }
  ];

  return (
    <div className="space-y-4 sticky top-20">
      {/* LinkedIn News */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-lg text-gray-900">LinkedIn News</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <ul className="space-y-4">
          {newsItems.map((item) => (
            <li key={item.id} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
              <a href="#" className="block group">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#0a66c2]">
                  {item.title} {item.trending && (
                    <span className="ml-1 text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">Trending</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.excerpt}</p>
                <span className="text-xs text-gray-400 mt-1 block">{item.time}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="w-full text-center mt-3 text-sm text-gray-500 hover:text-[#0a66c2] hover:underline">
          Show more
        </button>
      </div>

      {/* People you may know */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-lg text-gray-900">People you may know</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          {people.map((person) => (
            <div key={person.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={person.avatar} 
                  alt={person.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.title}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {person.mutualConnections} mutual connection{person.mutualConnections !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <button className="text-xs px-3 py-1.5 border border-[#0a66c2] text-[#0a66c2] hover:bg-[#ebf3fd] rounded-full font-medium">
                Connect
              </button>
            </div>
          ))}
        </div>
        <button className="w-full text-center mt-3 text-sm text-gray-500 hover:text-[#0a66c2] hover:underline">
          Show more
        </button>
      </div>

      {/* Trending Courses */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <h3 className="font-medium text-lg text-gray-900 mb-3">Trending courses</h3>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="group">
              <a href="#" className="block">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#0a66c2]">{course.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                <p className="text-xs text-gray-400 mt-1">{course.students}</p>
              </a>
            </div>
          ))}
        </div>
        <button className="w-full text-center mt-3 text-sm text-gray-500 hover:text-[#0a66c2] hover:underline">
          Show all courses
        </button>
      </div>

      {/* LinkedIn Footer */}
      <div className="text-xs text-gray-500 text-center py-4">
        <div className="flex flex-wrap justify-center space-x-2">
          <a href="#" className="hover:underline">About</a>
          <span>•</span>
          <a href="#" className="hover:underline">Accessibility</a>
          <span>•</span>
          <a href="#" className="hover:underline">Help Center</a>
          <br className="md:hidden" />
          <a href="#" className="hover:underline">Privacy & Terms</a>
          <span>•</span>
          <a href="#" className="hover:underline">Ad Choices</a>
          <span>•</span>
          <a href="#" className="hover:underline">Advertising</a>
        </div>
        <p className="mt-2">LinkedIn Corporation © 2023</p>
      </div>
    </div>
  );
};

export default RightSidebar;