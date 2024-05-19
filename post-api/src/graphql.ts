
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCommentInput {
    content: string;
    userId: string;
    postId: string;
}

export class UpdateCommentInput {
    content?: Nullable<string>;
}

export class CreatePostInput {
    title: string;
    content: string;
    userId: string;
}

export class UpdatePostInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Comment {
    id: string;
    content: string;
    user: User;
    post: Post;
    created_at: string;
    updated_at: string;
}

export abstract class IQuery {
    abstract comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;

    abstract comment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(id: string, updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: string, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Post {
    id: string;
    title: string;
    content: string;
    user: User;
    comments?: Nullable<Nullable<Comment>[]>;
    created_at: string;
    updated_at: string;
}

export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    posts?: Nullable<Nullable<Post>[]>;
    comments?: Nullable<Nullable<Comment>[]>;
    created_at: string;
    updated_at: string;
}

type Nullable<T> = T | null;
