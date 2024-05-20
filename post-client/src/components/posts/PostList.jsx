import React, { useEffect, useState } from 'react';
// import { getPosts } from '../../services/api';
import { Link } from 'react-router-dom';

function PostList() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     async function fetchPosts() {
    //         const data = await getPosts();
    //         setPosts(data);
    //     }
    //     fetchPosts();
    // }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul className="space-y-2">
                {posts?.length > 0 ? (
                    posts.map((post) => (
                        <li key={post.id} className="p-4 border rounded-md">
                            <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                                {post.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>
                        No posts
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PostList;
