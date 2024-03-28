import { faMapMarkedAlt, faCalendarAlt, faCarSide, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3`}`;

const Title = styled.h2`
  ${tw`
    text-xl
    text-black
    font-extrabold
    `}`

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    `}`

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-96
    items-center
    transition-colors
    hover:text-red-500
    `}`

const Step = styled.div`
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
    `}`

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4`}`

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-sm
    text-center
    text-gray-600
    `}`

const StepIcon = styled.span`
${tw`
  text-red-500
  text-3xl
  `}`
  

export function BookingSteps() {
  return <Container>
    <p className="font-bold text-3xl">How It Works <FontAwesomeIcon icon={faTruckFast} /></p>
    <StepsContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faMapMarkedAlt}/>
          </StepIcon>
        </Step>
        <StepTitle>
          Choose Location
        </StepTitle>
        <StepDescription>
          Find the nearest Yourcar location to find your dream car.
        </StepDescription>
      </StepContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faCalendarAlt}/>
          </StepIcon>
        </Step>
        <StepTitle>
          Pick Up Date
        </StepTitle>
        <StepDescription>
          Pickup the most suitable date to pick the car.
        </StepDescription>
      </StepContainer>
      <StepContainer>
        <Step>
          <StepIcon>
            <FontAwesomeIcon icon={faCarSide}/>
          </StepIcon>
        </Step>
        <StepTitle>
          Choose your car
        </StepTitle>
        <StepDescription>
          Choose the best car for you.
        </StepDescription>
      </StepContainer>
    </StepsContainer>
  </Container>
}