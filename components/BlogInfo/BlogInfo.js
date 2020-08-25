import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import Link from 'next/link'
import dateUtil from '../../helper/utils/dateFormatter'


const StyledBlogInfo = styled.div`
    width: 100%;
`

const Border = styled.div`
    border: 1px solid #fff;
`

const BlogInfoContent = styled.div`
    margin: 8px;
    background-color: ${({ theme }) => theme.color.white};
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
    margin-bottom: 5px;

       @media ${device.large} {
        margin-bottom: 10px;
    }
`;

const Arrow = styled.h3`
    font-weight: 200;
    color: tan;
    margin-top: 5px;
`

const BlogInfo = ({ className, publishedDate, slug, title, category, headline, arrow }) => {
    return (
        <StyledBlogInfo className={className}>
            <Border>
                <BlogInfoContent>
                    {publishedDate && <Metadata dateTime={publishedDate}>{dateUtil.getMonthAsString(publishedDate)}</Metadata>}
                    {!headline && (
                        <Title>
                            <Link href={`blog/${slug}`}><a>{title}</a></Link>
                        </Title>
                    )}
                    {headline &&
                        <Headline>{title}</Headline>
                    }
                    {category && <Metadata>{category}</Metadata>}
                    {arrow && <Arrow>&#8594;</Arrow>}
                </BlogInfoContent>
            </Border>
        </StyledBlogInfo>
    )
}

export default BlogInfo