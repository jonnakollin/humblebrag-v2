import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import dateUtil from '../../helper/utils/dateFormatter'

const StyledHero = styled.div`
    background-image: url(${props => props.image || 'black'});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
    position: relative;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media ${device.medium} {
        height: 75vh;
    }
`

const TextContainer = styled.div`
    text-align: center;
    background: #fff;
    margin: 0 auto -55px;
    position: absolute;
    bottom: 0;
    color: black;
    border-bottom: 1px solid #eee;
    padding: ${props => props.extraPadding ? '20px' : '10px'};
    width: 95%;

    @media ${device.medium} {
        max-width: 790px;
    }

    @media ${device.large} {
        width: 790px;
    }
`

const Metadata = styled.time`
    letter-spacing: 8px;
    text-transform: uppercase;
    font-size: 12px;
`

const Hero = ({ image, title, date, category }) => {
    const withoutMetadata = !date || !category;

    return (
        <StyledHero image={image}>
            <TextContainer extraPadding={withoutMetadata}>
                {date && <Metadata>{dateUtil.getMonthAsString(date)}</Metadata>}
                <h1>{title}</h1>
                {category && <Metadata>{category}</Metadata>}
            </TextContainer>
        </StyledHero>
    )
}

export default Hero