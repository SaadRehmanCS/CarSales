import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MclarenImg = require("../../../images/mclaren-orange-big.png")
const BlobImg = require("../../../images/blobpic.png")

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    justify-between`}`

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    `}`

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
    `};
    `;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    text-black
    mb-4  
    `}`

const Description = styled.p`
  ${tw`
    text-xs
    overflow-hidden
    max-h-12`}`

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute:
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }`

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }`

export function TopSection() {
  return <TopSectionContainer>
    <LeftContainer>
      <Slogan>
        Rent The Best Quality Cars With Us
      </Slogan>
      <Description>
        Always choose the best car from our local stores and order remotely
      </Description>
    </LeftContainer>
    <RightContainer>
      <BlobContainer>
        <img src={BlobImg} alt="blob"/>
      </BlobContainer>
      <StandaloneCar>
        <img src={MclarenImg} alt="mclaren car"/>
      </StandaloneCar>
    </RightContainer>
  </TopSectionContainer>
}