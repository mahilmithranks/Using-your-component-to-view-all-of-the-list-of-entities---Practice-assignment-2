import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
