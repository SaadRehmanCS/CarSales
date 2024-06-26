import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsResolver } from "./cars.resolver";
import { CarService } from "./cars.service";
import { Car } from "./entities/car";

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarService, CarsResolver],
  exports: [CarService],
})
export class CarsModule {

}