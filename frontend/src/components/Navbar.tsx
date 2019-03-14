import * as React from 'react'
import styled from 'styled-components'

import { Header, Subheader } from './Typography'

const Nav = styled.nav`
  height: 70px;
  position: fixed;
  z-index: 99;
  padding: 0 5em;
  width: 100vw;
`

const NavInner = styled.div`
  display: inline-grid;
  grid-template-columns: 25% 50% 25%;
  width: calc(100% - 10em);
  height: 100%;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 100%;
  grid-column: 1;
  justify-self: start;
`

const LogoText = styled.div`
  font-size: 2em;
  font-family: Cabin;
  line-height: 100%;
  height: 100%;
`

const MenuWrapper = styled.div`
  grid-column: 3;
  justify-self: end;
`

const Navbar = () => {
  return (
    <Nav>
      <NavInner>
        <LogoWrapper>
          <LogoText>twain.</LogoText>
        </LogoWrapper>
        <MenuWrapper />
      </NavInner>
    </Nav>
  )
}

export default Navbar
