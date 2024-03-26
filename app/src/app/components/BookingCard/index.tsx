import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../Button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CardContainer = styled.div`
  
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2`}`

const ItemContainer = styled.div`
  ${tw`
  flex relative`}`

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    mr-1
    `}`

const Name = styled.button`
  ${tw`
    text-gray-600
    text-xs`}`


const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2`}`

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3em;
  left: -2em;`

export function BookingCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalenderOpen, setIsStartCalenderOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalenderOpen, setIsReturnCalenderOpen] = useState(false);


  return <CardContainer>
    <ItemContainer>
      <Icon>
        <FontAwesomeIcon icon={faCalendarAlt}/>
      </Icon>
      <Name onClick={() => {setIsStartCalenderOpen(!isStartCalenderOpen); setIsReturnCalenderOpen(false)}}>Pick Up Date</Name>
      <FontAwesomeIcon className="pl-1 pr-0.5" icon={(isStartCalenderOpen ? faCaretUp : faCaretDown)}/>
      {isStartCalenderOpen && <DateCalendar value={startDate} onChange={setStartDate as any} />}
    </ItemContainer>
    <LineSeperator />
    <ItemContainer>
      <Icon>
        <FontAwesomeIcon icon={faCalendarAlt}/>
      </Icon>
      <Name onClick={() => {setIsReturnCalenderOpen(!isReturnCalenderOpen); setIsStartCalenderOpen(false)}}>Return Date</Name>
      <FontAwesomeIcon className="pl-1 pr-2.5" icon={(isReturnCalenderOpen ? faCaretUp : faCaretDown)}/>
      {isReturnCalenderOpen && <DateCalendar value={returnDate} onChange={setReturnDate as any} />}
    </ItemContainer>
    <Button theme="outlined" text="Book Your Ride" />
  </CardContainer>
}