import React from 'react'
import { useRouter } from 'next/router'
import { createClient } from '../../contentful'
import BlogPost from '../../components/BlogPost/BlogPost'

const client = createClient()

const Post = ({ post }) => {
    return (
        <BlogPost {...post.fields} />
    );
}

Post.getInitialProps = async (context) => {
    const { slug } = context.query;
    const entries = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug
    });
    return { post: entries.items[0] }
}

export default Post;