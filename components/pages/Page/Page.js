import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import Layout from '../../Layout/Layout'
import Hero from '../../Hero/Hero'
import PageContainer from '../../PageContainer/PageContainer'

const StyledPage = styled.div`
  animation: ${({ theme }) => theme.animation.zoom} 0.5s;
`

const Content = styled(Markdown)`
    margin: 0 auto;
    padding: 0 10px;
    line-height: 1.7;
    font-weight: 300;

    @media ${({ theme }) => theme.device.medium} {
        width: 90%;
        padding: 0;
    }

    @media ${({ theme }) => theme.device.large} {
        width: 790px;
    }
`

const Page = ({ title, image, content }) => {
    return (
        <Layout>
            <StyledPage>
                <Hero image={image} title={title}></Hero>
                <PageContainer>
                    {content && <Content source={content} />}
                </PageContainer>
            </StyledPage>
        </Layout>
    )
}

export default Page;