import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../theme/device'
import Markdown from 'react-markdown'
import Layout from '../../Layout/Layout'
import PageContainer from '../../PageContainer/PageContainer'
import Hero from '../../Hero/Hero'
import FsLightbox from 'fslightbox-react'

const BlogContent = styled(Markdown)`
    margin: 0 auto 40px;
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

const Image = styled.img`
    cursor: pointer;
`

const BlogPost = ({ title, featuredImages, publishedDate, category, content, images }) => {
    const [toggler, setToggler] = useState(false);

    return (
        <Layout>
            <Hero image={featuredImages[0].fields.file.url} title={title} date={publishedDate} category={category} />
            <PageContainer>
                {content && <BlogContent source={content} />}
                <Images>
                    {images?.map((image, index) => (
                        <Image src={image.fields.file.url} onClick={() => setToggler(!toggler)} />
                    ))}
                </Images>
            </PageContainer>
            <FsLightbox
                toggler={toggler}
                sources={
                    images?.map((image) => (
                        image?.fields?.file?.url
                    ))
                }
            />
        </Layout>
    )
}

export default BlogPost;