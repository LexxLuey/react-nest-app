// status-response.type.ts
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class StatusResponse {
  @Field()
  status: string;
}
