import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/Car";

const TopCarsContainer  = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    mb-10
    `}`;

const Title = styled.h2`
  ${tw`
    text-3xl
    text-black
    font-extrabold
    `}`

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    `}`

export function TopCars() {
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnail:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    fuelType: "Petrol",
  };

  return <TopCarsContainer>
    <Title>Explore our Top Deals</Title>
    <CarsContainer>
      <Car {...testCar}/>
      <Car {...testCar}/>
      <Car {...testCar}/>
      <Car {...testCar}/>
      <Car {...testCar}/>
    </CarsContainer>
  </TopCarsContainer>
}