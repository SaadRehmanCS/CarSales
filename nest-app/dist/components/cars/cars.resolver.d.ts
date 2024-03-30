import { CarService } from "./cars.service";
import { CarDeleteInput } from "./dto/car-delete.input";
import { CarInput } from "./dto/car.input";
import { Car } from "./entities/car";
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarService);
    cars(): Promise<Car[]>;
    addCar(car: CarInput): Promise<Car>;
    removeCar(uuid: CarDeleteInput): Promise<string>;
}
