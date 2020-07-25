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

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  a:hover {
    filter: brightness(0.6);
  }
`;

const Header = () => {


  return (
      <HeaderWrapper>
        <HeaderNav>
          <Link>Hola</Link>
        </HeaderNav>
      </HeaderWrapper>   
  );
}
export default Header
