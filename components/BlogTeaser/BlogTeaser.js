import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import PresentationInfo from '../PresentationInfo/PresentationInfo'

const StyledBlogTeaser = styled.div`
    position: relative;
    margin-bottom: 50px;

    @media ${device.large} {
        margin-bottom: 150px;   
    }

     &:last-child {
        margin-bottom: 0;
      }
`

const FullWidthImage = styled.div`
    background-image: url(${props => props.src || 'black'});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
    height: 95vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.large} {
         height: 75vh;
        background-attachment: fixed;
    }
`

const BlogTeaser = ({ title, slug, publishedDate, featuredImages }) => {
    return (
        <StyledBlogTeaser>
            <FullWidthImage src={featuredImages[0].fields.file.url}>
                <PresentationInfo publishedDate={publishedDate} slug={slug} title={title} />
            </FullWidthImage>
        </StyledBlogTeaser>
    )
}

export default BlogTeaser