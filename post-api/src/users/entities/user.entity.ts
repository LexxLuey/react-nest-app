import { Entity, Column, OneToMany, Unique } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { BaseModel } from 'src/base.entity';


@Entity()
@Unique(['username'])
@Unique(['email'])
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 200 })
  username: string;

  @Column({ type: 'varchar', length: 200 })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
