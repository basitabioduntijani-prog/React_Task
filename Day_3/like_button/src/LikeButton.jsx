import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleLike = () => {
    if (disabled) return; // Prevent multiple rapid clicks

    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));

    // Disable button for 1 second
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <button
      onClick={handleLike}
      disabled={disabled}
      className={`px-4 py-2 rounded-2xl font-semibold transition duration-300 
        ${liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}
        ${disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}`}
    >
      {liked ? "❤️ Liked" : "🤍 Like"} {likeCount} {likeCount === 1 ? "like" : "likes"}
    </button>
  );
};

export default LikeButton;
