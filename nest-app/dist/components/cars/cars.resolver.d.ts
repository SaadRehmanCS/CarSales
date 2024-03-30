import { CarService } from "./cars.service";
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarService);
    cars(): Promise<string>;
}
