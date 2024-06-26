"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_1 = require("./entities/car");
let CarService = class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async getAllCars() {
        return await this.carRepository.find({}).catch((err) => {
            console.log(err);
            throw new common_1.InternalServerErrorException(err);
        });
    }
    async insertCar(car) {
        return await this.carRepository.save(car).catch((err) => {
            console.log(err);
            throw new common_1.InternalServerErrorException();
        });
    }
    async deleteCar(input) {
        const result = await this.carRepository.delete(input.uuid).catch((err) => {
            console.log(err);
            throw new common_1.InternalServerErrorException();
        });
        if (result.affected == 1) {
            return "Car with uuid: " + input.uuid + " was deleted successfully";
        }
        else {
            return "Car with uuid: " + input.uuid + " could not be deleted";
        }
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarService);
//# sourceMappingURL=cars.service.js.map