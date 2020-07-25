import React from "react"
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
`;

const Header = () => {


  return (
      <HeaderWrapper>
        <nav>

        </nav>
      </HeaderWrapper>   
  );
}
export default Header
