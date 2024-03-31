import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, EntityMetadata, Repository } from "typeorm";
import { CarDeleteInput } from "./dto/car-delete.input";
import { CarInput } from "./dto/car.input";
import { Car } from "./entities/car";

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      console.log(err);
      throw new InternalServerErrorException(err);
    })
  }

  public async insertCar(car: CarInput): Promise<Car> {
    return await this.carRepository.save(car).catch((err) => {
      console.log(err);
      throw new InternalServerErrorException();
    })
  }

  public async deleteCar(input: CarDeleteInput): Promise<string> {
    const result = await this.carRepository.delete(input.uuid).catch((err) => {
      console.log(err);
      throw new InternalServerErrorException();
    });
    if (result.affected == 1) {
      return "Car with uuid: " + input.uuid + " was deleted successfully";
    } else {
      return "Car with uuid: " + input.uuid + " could not be deleted";
    }
  }
}