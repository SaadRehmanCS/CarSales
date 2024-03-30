import { Query, Resolver } from "@nestjs/graphql";
import { CarService } from "./cars.service";

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarService) {

  }

  @Query((returns) => String)
  public async cars() {
    return "Hello and welcome to car shop";
  }
}