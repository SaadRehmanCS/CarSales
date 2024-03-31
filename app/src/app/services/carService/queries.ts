import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
query GetCars {
  cars {
    id
    name
    mileage
    gearType
    fuelType
    dailyPrice
    monthlyPrice
    thumbnail
  }
}`