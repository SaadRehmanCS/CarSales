import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CarDeleteInput {
  @Field()
  uuid: string;
}