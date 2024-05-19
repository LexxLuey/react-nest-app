import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from 'src/base.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Comment extends BaseModel {
  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
