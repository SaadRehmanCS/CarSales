import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DeleteResult } from "typeorm";
import { CarService } from "./cars.service";
import { CarDeleteInput } from "./dto/car-delete.input";
import { CarInput } from "./dto/car.input";
import { Car } from "./entities/car";

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarService) {

  }

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addCar(@Args('car') car: CarInput): Promise<Car> {
    return this.carsService.insertCar(car)
  }

  @Mutation((returns) => String)
  public async removeCar(@Args('carUuid') uuid: CarDeleteInput): Promise<string> {
    return this.carsService.deleteCar(uuid);
  }
}