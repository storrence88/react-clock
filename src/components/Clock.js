import React, { useRef, useEffect } from 'react'
import { getTime } from '../helper'
import styled from 'styled-components'

const ClockWrapper = styled.h1`
  font-size: 60px;
  font-family: Orbitron;
  letter-spacing: 7px;
  color: #17D4FE;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Clock = () => {
  // Create reference to the span element in the DOM using useRef hook
  let timeRef = useRef(null);

  // Run getTime method from helper.js with useEffect hook
  useEffect(() => { 
    getTime(timeRef);
    setInterval(() => getTime(timeRef), 1000) 
  }, [])

  return (
    <ClockWrapper ref={timeRef}>00:00:00</ClockWrapper>
  )
}

export default Clock;
