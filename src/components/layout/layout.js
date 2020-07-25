
import React from  'react';
import Header from '../header'
import styled, { ThemeProvider } from 'styled-components'


const StyledContainer = styled.div`
   background: ${({ theme }) => theme.colors.background};
   overflow-x: hidden;
`;
const Layout = () => {

  return (
      <Header/>
  );
}
export default Layout
