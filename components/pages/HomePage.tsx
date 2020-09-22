import React from 'react'
import styled from 'styled-components'
import BlogTeaser from '../BlogTeaser'
import Layout from '../layout/Layout'
import PageContainer from '../layout/PageContainer'

interface HomePageProps {
    posts: any;
}

const Container = styled(PageContainer)`
    padding: 20px 10px;

    @media ${({ theme }) => theme.device.large} {
        display: grid;
        grid-template-columns: 40% 40%;
        align-items: center;
        justify-content: center;
        grid-gap: 150px;
        padding: 0;
        margin-bottom: 60px;
    }

`

const HomePage = ({ posts }: HomePageProps) => {
    return (
        <Layout>
            <Container>
                {posts?.map((post: any, index: number) => (
                    <BlogTeaser key={index} {...post.fields} />
                ))}
            </Container>
        </Layout>
    )
}

export default HomePage