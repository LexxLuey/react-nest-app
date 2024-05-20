import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getPost } from '../../services/api';
import EditPostModal from './EditPostModal';
import * as Dialog from '@radix-ui/react-dialog';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    // useEffect(() => {
    //     async function fetchPost() {
    //         const data = await getPost(id);
    //         setPost(data);
    //     }
    //     fetchPost();
    // }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.content}</p>

            <Dialog.Root>
                <Dialog.Trigger className="px-4 py-2 bg-green-600 text-white rounded-md">Edit Post</Dialog.Trigger>
                <EditPostModal post={post} />
            </Dialog.Root>
        </div>
    );
}

export default PostDetails;
