import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { styled } from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/Car";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { makeSelectTopCars } from "./selectors";
import { setTopCars } from "./slice";

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

  const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
  })

  const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
    topCars
  }));

export function TopCars() {
  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: " + err);
    });

    console.log("Fetched cars: ", cars);
    if (cars) {
      setTopCars(cars);
    }
  }

  useEffect(() => {
    fetchTopCars();
  }, []);

  return <TopCarsContainer>
    <Title>Explore our Top Deals</Title>
    <CarsContainer>
      {topCars.map((car) => (
        <Car {...car}/>
      ))}
    </CarsContainer>
  </TopCarsContainer>
}