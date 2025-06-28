// src/components/CreatePost.jsx
import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const CreatePost = ({ onPostCreated }) => {
  const { currentUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    
    const newPost = {
      id: Date.now(),
      author: currentUser?.name || 'Current User',
      title: currentUser?.headline || 'Professional',
      date: 'Just now',
      content: postContent,
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      image: selectedFile ? URL.createObjectURL(selectedFile) : null,
      profilePicture: currentUser?.profilePicture || null,
      userInitial: currentUser?.name?.charAt(0)?.toUpperCase() || 'U'
    };

    if (onPostCreated) {
      onPostCreated(newPost);
    }
    
    setPostContent('');
    setSelectedFile(null);
    setIsModalOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {currentUser?.profilePicture ? (
              <img
                src={currentUser.profilePicture}
                alt={currentUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium text-gray-600">
                {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 text-left text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 text-sm transition-colors"
          >
            Start a post, {currentUser?.name?.split(' ')[0] || 'there'}
          </button>
        </div>
        
        <div className="flex justify-between text-sm">
          <button 
            onClick={triggerFileInput}
            className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#378fe9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Photo
          </button>
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5f9b41] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Video
          </button>
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e16745] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Article
          </button>
          <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#915907] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Event
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Post Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Create a post</h2>
                <button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setPostContent('');
                    setSelectedFile(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  {currentUser?.profilePicture ? (
                    <img
                      src={currentUser.profilePicture}
                      alt={currentUser.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-medium text-gray-600">
                      {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{currentUser?.name || 'Current User'}</p>
                  <p className="text-sm text-gray-500">{currentUser?.headline || 'Professional'}</p>
                </div>
              </div>

              <form onSubmit={handlePostSubmit}>
                <div className="mb-4">
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="What do you want to talk about?"
                    className="w-full p-3 border-0 resize-none focus:outline-none text-lg placeholder-gray-400"
                    rows={6}
                    autoFocus
                  />
                </div>

                {selectedFile && (
                  <div className="mb-4 relative">
                    <img 
                      src={URL.createObjectURL(selectedFile)} 
                      alt="Preview" 
                      className="w-full h-auto rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="absolute top-2 right-2 bg-gray-900 bg-opacity-75 text-white rounded-full p-1 hover:bg-opacity-90 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex space-x-1">
                    <button 
                      type="button"
                      onClick={triggerFileInput}
                      className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                      title="Add a photo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#378fe9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!postContent.trim()}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      postContent.trim() 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;