import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CarInput {
  @Field()
  name: string;

  @Field()
  dailyPrice: number;

  @Field()
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gearType: string;

  @Field()
  fuelType: string;

  @Field()
  thumbnail: string;
}