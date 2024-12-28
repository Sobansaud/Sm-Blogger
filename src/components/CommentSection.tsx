
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Predefined user reviews
  const reviews = [
    
        {
          name: "John Doe",
          img: "https://randomuser.me/api/portraits/men/1.jpg", // URL for John Doe's image
          comment: "This blog post on Next.js 15 is incredibly insightful! I can't wait to try out the new features in my projects."
        },
        {
          name: "Jane Smith",
          img: "https://randomuser.me/api/portraits/women/1.jpg", // URL for Jane Smith's image
          comment: "AI revolution is truly transforming the industry. Great read! The future of tech looks very promising."
        },
        {
          name: "Alice Johnson",
          img: "https://randomuser.me/api/portraits/women/2.jpg", // URL for Alice Johnson's image
          comment: "Python continues to amaze me with its simplicity and power. This post solidified why it's my go-to language for projects."
        }
      ];
      

  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Comments</h2>

      {/* Comments List */}
      <div className="mb-4">
        {comments.length === 0 ? (
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        ) : (
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {comments.map((comment, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-4 border-b border-gray-600 py-4 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">
                  {`U${index + 1}`}
                </div>
                <div>
                  <p className="text-sm font-semibold">User {index + 1}</p>
                  <p>{comment}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Add New Comment */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="text-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full sm:w-auto"
        />
        <button
          onClick={handleAddComment}
          className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Comment
        </button>
      </div>

      {/* Predefined Reviews Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">What People Are Saying</h3>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
            />
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-gray-400">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

