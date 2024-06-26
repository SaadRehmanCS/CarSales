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
exports.CarsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cars_service_1 = require("./cars.service");
const car_delete_input_1 = require("./dto/car-delete.input");
const car_input_1 = require("./dto/car.input");
const car_1 = require("./entities/car");
let CarsResolver = class CarsResolver {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async cars() {
        return await this.carsService.getAllCars().catch((err) => {
            throw err;
        });
    }
    async addCar(car) {
        return this.carsService.insertCar(car);
    }
    async removeCar(uuid) {
        return this.carsService.deleteCar(uuid);
    }
};
exports.CarsResolver = CarsResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [car_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "cars", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => car_1.Car),
    __param(0, (0, graphql_1.Args)('car')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_input_1.CarInput]),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "addCar", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => String),
    __param(0, (0, graphql_1.Args)('carUuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_delete_input_1.CarDeleteInput]),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "removeCar", null);
exports.CarsResolver = CarsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [cars_service_1.CarService])
], CarsResolver);
//# sourceMappingURL=cars.resolver.js.map