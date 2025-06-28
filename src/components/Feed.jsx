// src/components/Feed.jsx
import { useState, useContext } from 'react';
import { dummyPosts } from '../data/dummyPosts';
import Post from './Post';
import CreatePost from './CreatePost';
import { AuthContext } from '../context/AuthContext';

const Feed = () => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState(dummyPosts);

  const handlePostCreated = (newPost) => {
    
    const completePost = {
      ...newPost,
      id: Date.now(), 
      author: currentUser?.name || 'Current User',
      title: currentUser?.headline || 'Professional',
      date: 'Just now',
      profilePicture: currentUser?.profilePicture || null,
      userInitial: currentUser?.name?.charAt(0)?.toUpperCase() || 'U'
    };

    
    setPosts(prevPosts => [completePost, ...prevPosts]);
  };

  const handlePostUpdate = (updatedPost) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  };

  const handlePostDelete = (postId) => {
    setPosts(prevPosts => 
      prevPosts.filter(post => post.id !== postId)
    );
  };

  return (
    <div className="space-y-4">
      <CreatePost onPostCreated={handlePostCreated} />
      {posts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No posts yet. Create your first post!</p>
        </div>
      ) : (
        posts.map((post) => (
          <Post 
            key={post.id} 
            post={post} 
            onPostUpdate={handlePostUpdate}
            onPostDelete={handlePostDelete}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
