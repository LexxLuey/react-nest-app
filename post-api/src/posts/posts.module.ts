import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UsersModule } from 'src/users/users.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [
    TypeOrmModule.forFeature([Post]),
    UsersModule,
    forwardRef(() => CommentsModule),
  ],
  exports: [PostsResolver, PostsService],
})
export class PostsModule {}
