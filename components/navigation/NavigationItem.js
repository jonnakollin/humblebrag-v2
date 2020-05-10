import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { device } from '../theme/device'

const StyledNavigationItem = styled.a`
    padding: 30px 0;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 8px;
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: color 5s linear;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }

    @media ${device.large} {
      padding: 0;
      font-size: 24px;
      margin-right: 20px;

    &:last-child {
        margin-right: 0;
      }
    }
`

const NavigationItem = ({ path, name, external }) => {
  return external ? <StyledNavigationItem href={path}>{name}</StyledNavigationItem> : <Link href={path}><StyledNavigationItem>{name}</StyledNavigationItem></Link>
}

export default NavigationItem