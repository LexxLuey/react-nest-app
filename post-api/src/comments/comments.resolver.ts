import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';
import { StatusResponse } from 'src/status-response.type';
import { User } from 'src/graphql';
import { UsersService } from 'src/users/users.service';

@Resolver('Comment')
export class CommentsResolver {
  constructor(
    private readonly commentService: CommentsService,
    private readonly userService: UsersService,
  ) {}

  @Query(() => [Comment])
  async comments(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Query(() => Comment)
  async comment(@Args('id') id: string): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  async createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ): Promise<Comment> {
    return this.commentService.create(createCommentInput);
  }

  @Mutation(() => Comment)
  async updateComment(
    @Args('id') id: string,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ): Promise<Comment> {
    return this.commentService.update(id, updateCommentInput);
  }

  @Mutation(() => Comment)
  async removeComment(@Args('id') id: string): Promise<StatusResponse> {
    try {
      this.commentService.remove(id);
      return { status: 'Comment removed successfully' };
    } catch (error) {
      return { status: 'Comment not removed successfully' };
    }
  }

  @ResolveField(() => User)
  user(@Parent() comment: Comment) {
    return this.userService.findOne(comment.user.id);
  }
}
