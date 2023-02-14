import React from 'react'
import styled from 'styled-components'
import { FaHive } from "react-icons/fa";

const HeaderWrap=styled.div`
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; height: 60px;

`;
const HeaderLogo=styled.div`
  font-size: var(--gap-large); cursor: pointer; color: var(--main);
`;
const HeaderTitle=styled.div`
  font-size: var(--fz-big);
  font-weight: bold;
  color: var(--main);
`;


const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo><FaHive /></HeaderLogo>
      <HeaderTitle>My Todo</HeaderTitle>
    </HeaderWrap>
  )
}

export default Header