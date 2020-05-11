import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import PresentationInfo from '../PresentationInfo/PresentationInfo'

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

    @media ${device.large} {
        height: 75vh;
        background-attachment: fixed;
    }
`

const Hero = ({ image, title, date, category }) => {
    return (
        <StyledHero image={image}>
            <PresentationInfo title={title} publishedDate={date} category={category} headline />
        </StyledHero>
    )
}

export default Hero