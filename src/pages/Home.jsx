// src/pages/Home.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import RightSidebar from '../components/RightSidebar';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20">
              <Sidebar user={currentUser} />
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            <Feed />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-20">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
