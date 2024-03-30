import { Repository } from "typeorm";
import { CarDeleteInput } from "./dto/car-delete.input";
import { CarInput } from "./dto/car.input";
import { Car } from "./entities/car";
export declare class CarService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    insertCar(car: CarInput): Promise<Car>;
    deleteCar(input: CarDeleteInput): Promise<string>;
}
