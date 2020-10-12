import React, { useRef, useEffect } from 'react'
import { getTime } from '../helper'
import styled from 'styled-components'

const Clock = () => {
  // Create reference to the span element in the DOM using useRef hook
  let timeRef = useRef(null);

  // Run getTime method from helper.js with useEffect hook
  useEffect(() => { 
    getTime(timeRef);
    setInterval(() => getTime(timeRef), 1000) 
  }, [])

  return (
    <h1>
      <span ref={timeRef}>00:00:00</span>
    </h1>
  )
}

export default Clock;
