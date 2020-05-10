import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import Link from 'next/link'
import dateUtil from '../../helper/utils/dateFormatter'

const StyledBlogTeaser = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

const Photos = styled.div`
    display: flex;
    align-items: center;

    &:last-child {
        margin-left: 10px;
    }
`

const PhotoContainer = styled.div`
    overflow: hidden;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);

    &:nth-child(even) {
        margin-left: 10px;
    }
`;

const Image = styled.img`
    &:hover {
        transform: scale(1.1);
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`

const Metadata = styled.time`
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    @media ${device.medium} {
        font-size: 16px;
    }
`

const Title = styled.h2`
    margin-right: auto;
    max-width: 50%;
`;

const BlogTeaser = ({ title, slug, publishedDate, featuredImages }) => {
    return (
        <StyledBlogTeaser>
            <Photos>
                {featuredImages.map((featuredImage, index) => (
                    <PhotoContainer key={index}>
                        <Link
                            href={`blog/${slug}`}
                        >
                            <Image src={featuredImage.fields.file.url} />
                        </Link>
                    </PhotoContainer>
                ))}
            </Photos>
            <TextContainer>
                <Metadata dateTime={publishedDate}>{dateUtil.getMonthAsString(publishedDate)}</Metadata>
                <Title>
                    <Link href={`blog/${slug}`}><a>{title}</a></Link>
                </Title>
            </TextContainer>
        </StyledBlogTeaser>
    )
}

export default BlogTeaser;