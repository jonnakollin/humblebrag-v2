import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import BlogInfo from '../BlogInfo/BlogInfo'
import { device } from '../theme/device'

const Container = styled.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${device.large} {
        margin-bottom: 0px;
    }

    &:before {
        content: '';
        height: 25px;
        width: 80px;
        background-color: tan;
        opacity: 0.85;
        position: absolute;
        top: -5px;
        left: -5px;
        transform: translateX(-30%) translateY(10%) rotate(-45deg);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
        z-index: 2;
    }

    &:after {
        content: '';
        height: 25px;
        width: 80px;
        background-color: tan;
        opacity: 0.85;
        position: absolute;
        bottom: 9px;
        right: -56px;
        transform: translateX(-30%) translateY(10%) rotate(-45deg);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
        z-index: 2;
    }
`

const Image = styled.img`
    position: relative;
    z-index: 1;
`

const Middle = styled.div`
   position: absolute;
    top: 50px;
    left: 50px;
    bottom: 50px;
    right: 50px;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &:hover {
        opacity: 0.9;
    }
`

const Block = styled.div`
    @media ${device.large} {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 40px;
        left: 40px;
        background-color: ${({ theme }) => theme.color.beige};
    }
`

const BlogTeaser = ({ title, slug, publishedDate, category, featuredImages }) => {
    return (
        <Link href={`blog/${slug}`}>
            <Container>
                <Image src={featuredImages[0]?.fields?.file.url} />
                <Block />
                <Middle>
                    <BlogInfo title={title} publishedDate={publishedDate} slug={slug} arrow />
                </Middle>
            </Container>
        </Link>
    )
}

export default BlogTeaser