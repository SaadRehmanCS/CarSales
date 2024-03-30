import { Module } from "@nestjs/common";
import { CarsResolver } from "./cars.resolver";
import { CarService } from "./cars.service";

@Module({
  imports: [],
  providers: [CarService, CarsResolver],
  exports: [CarService],
})
export class CarsModule {

}