import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { createPost } from '../../services/api';
import * as Form from '@radix-ui/react-form';

const PostSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
    userId: z.string().uuid('Invalid user ID'),
});

function PostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(PostSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // await createPost(data);
            // Handle successful post creation
        } catch (error) {
            // Handle error
            console.log(error);
        }
    };

    return (
        <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-md">
            <Form.Field name="title">
                <Form.Label className="block text-sm font-medium text-gray-700">Title</Form.Label>
                <Form.Control asChild>
                    <input
                        {...register('title')}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </Form.Control>
                {errors.title && <Form.Message className="mt-2 text-sm text-red-600">{errors.title.message}</Form.Message>}
            </Form.Field>

            <Form.Field name="content">
                <Form.Label className="block text-sm font-medium text-gray-700">Content</Form.Label>
                <Form.Control asChild>
                    <textarea
                        {...register('content')}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </Form.Control>
                {errors.content && <Form.Message className="mt-2 text-sm text-red-600">{errors.content.message}</Form.Message>}
            </Form.Field>

            <Form.Field name="userId">
                <Form.Label className="block text-sm font-medium text-gray-700">User ID</Form.Label>
                <Form.Control asChild>
                    <input
                        {...register('userId')}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </Form.Control>
                {errors.userId && <Form.Message className="mt-2 text-sm text-red-600">{errors.userId.message}</Form.Message>}
            </Form.Field>

            <Form.Submit asChild>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Create Post</button>
            </Form.Submit>
        </Form.Root>
    );
}

export default PostForm;
