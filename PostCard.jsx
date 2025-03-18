import React from 'react';
import LikeButton from './LikeButton';

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      maxWidth: '400px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
        <img
          src={post.profilePicture}
          alt={post.username}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '8px',
          }}
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
