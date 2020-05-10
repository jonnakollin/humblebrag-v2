import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import Markdown from 'react-markdown'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'

const StyledBlogPost = styled.div`
    margin-bottom: 60px;
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
        column-count: 2;
    }


    @media ${device.large} {
        padding: 0 40px;
        text-align: center;
        column-count: 3;
    }
`

const BlogPost = ({ title, featuredImages, publishedDate, category, content, images }) => {
    return (
        <Layout>
            <StyledBlogPost>
                <Hero image={featuredImages[0].fields.file.url} title={title} date={publishedDate} category={category} />
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