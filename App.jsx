import React from 'react';
import PostCard from './PostCard';

const App = () => {
  const posts = [
    {
      profilePicture: 'https://via.placeholder.com/40',
      username: 'user1',
      content: 'This is the first post.',
    },
    {
      profilePicture: 'https://via.placeholder.com/40',
      username: 'user2',
      content: 'This is the second post.',
    },
    {
      profilePicture: 'https://via.placeholder.com/40',
      username: 'user3',
      content: 'This is the third post.',
    },
  ];

  return (
    <div style={{
      padding: '16px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default App;
