import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { StatusResponse } from 'src/status-response.type';
import { CommentsService } from 'src/comments/comments.service';

@Resolver('Post')
export class PostsResolver {
  constructor(
    private readonly postService: PostsService,
    private readonly commentService: CommentsService,
  ) {}

  @Query(() => [Post], { nullable: true })
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => Post, { nullable: true })
  async post(@Args('id') id: string): Promise<Post> {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.create(createPostInput);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id') id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    return this.postService.update(id, updatePostInput);
  }

  @Mutation(() => Post)
  async removePost(@Args('id') id: string): Promise<StatusResponse> {
    try {
      this.postService.remove(id);
      return { status: 'Post removed successfully' };
    } catch (error) {
      return { status: 'Post not removed successfully' };
    }
  }

  @ResolveField(() => [Comment])
  comments(@Parent() post: Post) {
    return this.commentService.findByPostId(post.id);
  }
}
