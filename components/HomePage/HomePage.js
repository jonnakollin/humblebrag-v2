import React from 'react'
import styled from 'styled-components';
import { device } from '../theme/device';
import BlogTeaser from '../BlogTeaser/BlogTeaser'
import Layout from '../Layout/Layout'

const Container = styled.div`
    padding: 10px;

    @media ${device.large} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        margin: 40px;
        padding: 0;
    }

`;

const HomePage = ({ posts }) => {
    return (
        <Layout>
            <Container>
                {posts.map((post, index) => (
                    <BlogTeaser key={index} {...post.fields} />
                ))}
            </Container>
        </Layout>
    )
}

export default HomePage
