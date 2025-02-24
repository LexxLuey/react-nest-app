import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateCommentInput } from './create-comment.input';

@InputType()
export class UpdateCommentInput extends PartialType(CreateCommentInput) {
  @Field({ nullable: true })
  content?: string;
}
