import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import Link from 'next/link'
import dateUtil from '../../helper/utils/dateFormatter'

const StyledPresentationInfo = styled.div`
    position: absolute;
    margin: 0 auto -15px auto;
    bottom: 0;
    width: 95%;

    @media ${device.medium} {
        max-width: 590px;
    }

    @media ${device.large} {
        width: 590px;
    }
`

const Border = styled.div`
    border: 1px solid #fff;
`

const PresentationInfoContent = styled.div`
    margin: 8px;
    background: #fff;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media ${device.large} {
        padding: 50px 20px;
    }
`

const Metadata = styled.time`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 6px;
    text-transform: uppercase;
`

const Title = styled.h2`

`;

const Headline = styled.h1`

`;

const PresentationInfo = ({ publishedDate, slug, title, category, headline }) => {
    return (
        <StyledPresentationInfo>
            <Border>
                <PresentationInfoContent>
                    <Metadata dateTime={publishedDate}>{dateUtil.getMonthAsString(publishedDate)}</Metadata>
                    {!headline && (
                        <Title>
                            <Link href={`blog/${slug}`}><a>{title}</a></Link>
                        </Title>
                    )}
                    {headline &&
                        <Headline><Link href={`blog/${slug}`}><a>{title}</a></Link></Headline>
                    }
                    {category && <Metadata>{category}</Metadata>}
                </PresentationInfoContent>
            </Border>
        </StyledPresentationInfo>
    )
}

export default PresentationInfo