import React from 'react'
import styled from 'styled-components'
import { device } from '../../theme/device'
import BlogTeaser from '../../BlogTeaser/BlogTeaser'
import Layout from '../../Layout/Layout'
import PageContainer from '../../PageContainer/PageContainer'

const Container = styled(PageContainer)`
    padding: 20px 10px;

    @media ${device.large} {
        display: grid;
        grid-template-columns: 40% 40%;
        align-items: center;
        justify-content: center;
        grid-gap: 150px;
        padding: 0;
        margin-bottom: 60px;
    }

`

const HomePage = ({ posts }) => {
    return (
        <Layout>
            <Container>
                {posts?.map((post, index) => (
                    <BlogTeaser key={index} {...post.fields} />
                ))}
            </Container>
        </Layout>
    )
}

export default HomePage