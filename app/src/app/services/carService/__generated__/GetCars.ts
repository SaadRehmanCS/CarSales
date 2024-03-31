/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCars
// ====================================================

export interface GetCars_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  fuelType: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnail: string;
}

export interface GetCars {
  cars: GetCars_cars[];
}
