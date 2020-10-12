import React from 'react';
import { Reset } from 'styled-reset'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  color: white;
`

function App() {
  return (
    <>
      <Reset />
      <Wrapper>
        This is the App component!
      </Wrapper>
    </>
  );
}

export default App;