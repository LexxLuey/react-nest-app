import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { Comment } from './entities/comment.entity';

@Module({
  providers: [CommentsResolver, CommentsService],
  imports: [
    TypeOrmModule.forFeature([Comment]),
    UsersModule,
    forwardRef(() => PostsModule),
  ],
  exports: [CommentsResolver, CommentsService, TypeOrmModule],
})
export class CommentsModule {}
