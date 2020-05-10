import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import Link from 'next/link'
import dateUtil from '../../helper/utils/dateFormatter'

const StyledBlogTeaser = styled.div`
    position: relative;
    max-height: 515px;
    margin-bottom: 200px;
`

const FullWidthImage = styled.div`
    background-image: url(${props => props.src || 'black'});
    background-repeat: no-repeat;
    background-size: cover;
    height: 515px;
    background-attachment: fixed;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ObjectPresentationInfo = styled.div`
    position: absolute;
    margin: 0 auto -35px auto;
    bottom: 0;
    width: 95%;

    @media ${device.medium} {
        max-width: 590px;
    }

    @media ${device.large} {
        width: 590px;
    }
`

const ObjectPresentationInfoBorder = styled.div`
    border: 1px solid #fff;
`

const ObjectPresentationInfoInner = styled.div`
    margin: 8px;
    background: #fff;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Metadata = styled.time`
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 6px;
    text-transform: uppercase;

    @media ${device.medium} {
        font-size: 16px;
    }
`

const Title = styled.h2`

`;

const BlogTeaser = ({ title, slug, publishedDate, featuredImages }) => {
    return (
        <StyledBlogTeaser>
            <FullWidthImage src={featuredImages[0].fields.file.url}>
                <ObjectPresentationInfo>
                    <ObjectPresentationInfoBorder>
                        <ObjectPresentationInfoInner>
                            <Metadata dateTime={publishedDate}>{dateUtil.getMonthAsString(publishedDate)}</Metadata>
                            <Title>
                                <Link href={`blog/${slug}`}><a>{title}</a></Link>
                            </Title>
                        </ObjectPresentationInfoInner>
                    </ObjectPresentationInfoBorder>
                </ObjectPresentationInfo>
            </FullWidthImage>
        </StyledBlogTeaser>
    )
}

export default BlogTeaser