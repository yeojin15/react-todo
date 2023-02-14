import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Wrap from './Wrap';

const BodyWrap=styled.div`
  padding: 0 var(--gap-base);
`;

const Main = () => {
  return (
    <BodyWrap>
      <Routes>
        <Route path="/main" element={<Wrap />} />
      </Routes>
    </BodyWrap>
  )
}

export default Main