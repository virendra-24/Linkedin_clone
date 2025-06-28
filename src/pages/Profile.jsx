import ProfileCard from '../components/ProfileCard';
import Feed from '../components/Feed';

const Profile = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Profile Card (30% width on desktop) */}
          <div className="lg:w-1/3 flex-shrink-0">
            <ProfileCard />
          </div>

          {/* Right Column - Feed (70% width on desktop) */}
          <div className="lg:w-2/3">
            <Feed profileView={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;