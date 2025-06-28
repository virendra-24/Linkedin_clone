import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

const Post = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{post.name}</h3>
              <p className="text-xs text-gray-500">{post.title} • {post.timeAgo}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <FiMoreHorizontal size={18} />
          </button>
        </div>

        {/* Post Content */}
        <p className="mt-3 text-gray-800">{post.content}</p>

        {/* Post Image (if exists) */}
        {post.image && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments • {post.shares} shares</span>
      </div>

      {/* Post Actions */}
      <div className="flex border-t border-gray-100 divide-x divide-gray-100">
        <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:bg-gray-50 space-x-1">
          <FaRegThumbsUp size={16} />
          <span>Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:bg-gray-50 space-x-1">
          <FaRegCommentAlt size={16} />
          <span>Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:bg-gray-50 space-x-1">
          <FaShare size={16} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;