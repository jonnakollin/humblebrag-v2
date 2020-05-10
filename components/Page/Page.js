import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/device'
import { zoom } from '../theme/animation'
import Markdown from 'react-markdown'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'

const StyledPage = styled.div`
  animation: ${zoom} 0.5s;
`

const Content = styled(Markdown)`
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


const Page = ({ title, image, content }) => {
    return (
        <Layout>
            <StyledPage>
                <Hero image={image.fields.file.url} title={title}></Hero>
                {content && <Content source={content} />}
            </StyledPage>
        </Layout>
    )
}

export default Page;