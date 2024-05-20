import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { updatePost } from '../../services/api';
import * as Dialog from '@radix-ui/react-dialog';

const UpdatePostSchema = z.object({
    title: z.string().min(1, 'Title is required').optional(),
    content: z.string().min(1, 'Content is required').optional(),
});

function EditPostModal({ post }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UpdatePostSchema),
        defaultValues: {
            title: post.title,
            content: post.content,
        },
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // await updatePost(post.id, data);
            // Handle successful update
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    return (
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <Dialog.Title className="text-lg font-bold">Edit Post</Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input {...register('title')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea {...register('content')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                        {errors.content && <p className="mt-2 text-sm text-red-600">{errors.content.message}</p>}
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Dialog.Close asChild>
                            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-md">Cancel</button>
                        </Dialog.Close>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Update</button>
                    </div>
                </form>
            </div>
        </Dialog.Content>
    );
}

export default EditPostModal;
