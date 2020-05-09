import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/device'
import Markdown from 'react-markdown'
import dateUtil from '../../helper/utils/dateFormatter'
import Layout from '../Layout/Layout'

const StyledBlogPost = styled.div`
    margin-bottom: 60px;
`

const Header = styled.div`
    background-image: url(${props => props.image || 'black'});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    position: relative;

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
    padding: 10px;
    width: 95%;

    @media ${device.medium} {
        max-width: 790px;
    }

    @media ${device.large} {
        width: 790px;
    }
`

const Metadata = styled.time`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 12px;
`

const BlogContent = styled(Markdown)`
    margin: 70px auto 0;
    padding: 0 10px;
    line-height: 1.7;
    font-weight: 300;

    @media ${device.medium} {
        width: 90%;
        padding: 0;
    }

    @media ${device.large} {
        width: 790px;
    }
`

const Images = styled.div`
    margin-top: 20px;
    padding: 0 10px;

    @media ${device.medium} {
        padding: 0 40px;
        text-align: center;
    }
`


const BlogPost = ({ title, featuredImages, publishedDate, category, content, images }) => {
    return (
        <Layout>
            <StyledBlogPost>
                <Header image={featuredImages[0].fields.file.url}>
                    <TextContainer>
                        <Metadata>{dateUtil.getMonthAsString(publishedDate)}</Metadata>
                        <h1>{title}</h1>
                        <Metadata>{category}</Metadata>
                    </TextContainer>
                </Header>
                {content && <BlogContent source={content} />}
                <Images>
                    {images?.map((image, index) => (
                        <img key={index} src={image.fields.file.url} />
                    ))}
                </Images>
            </StyledBlogPost>
        </Layout>
    )
}

export default BlogPost;