// src/pages/Notifications.jsx
import { useAuth } from '../context/AuthContext';

const Notifications = () => {
  const { currentUser } = useAuth();

  const notifications = [
    {
      id: 1,
      type: 'connection',
      message: 'Priya Patel sent you a connection request',
      time: '2h ago',
      read: false,
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    {
      id: 2,
      type: 'job',
      message: 'Tech Mahindra is hiring Senior React Developers',
      time: '5h ago',
      read: false,
      avatar: 'https://logo.clearbit.com/techmahindra.com'
    },
    {
      id: 3,
      type: 'post',
      message: 'Rahul Kapoor commented on your post',
      time: '1d ago',
      read: true,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 4,
      type: 'event',
      message: 'You might be interested in: React Conference 2024',
      time: '2d ago',
      read: true,
      avatar: 'https://logo.clearbit.com/reactjs.org'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">{notifications.filter(n => !n.read).length} unread</p>
        </div>

        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-start space-x-3">
                <img 
                  src={notification.avatar} 
                  alt="Notification" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;