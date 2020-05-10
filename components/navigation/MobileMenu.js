import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.charcoal};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
`

const Menu = ({ open, links }) => {
    return (
        <StyledMenu open={open}>
            {links && links.map((link, index) => {
                return <NavigationItem key={index} {...link} />
            })}
        </StyledMenu>
    )
}

export default Menu;