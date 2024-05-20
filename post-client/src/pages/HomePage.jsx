import React from 'react';
import PostList from '../components/posts/PostList';
import PostForm from '../components/posts/PostForm';

function HomePage() {
    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <PostForm />
            <PostList />
        </div>
    );
}

export default HomePage;
