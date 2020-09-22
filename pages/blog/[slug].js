import BlogPost from '../../components/pages/BlogPost/BlogPost'
import { getAllBlogPostsWithSlug, getBlogPostBySlug } from '../../api/api';

const BlogPostPage = ({ post }) => {
    return (
        <BlogPost {...post.fields} />
    );
}

export const getStaticPaths = async () => {
    const posts = await getAllBlogPostsWithSlug()
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const postBySlug = await getBlogPostBySlug(params?.slug)
    return { props: { post: postBySlug } }
}

export default BlogPostPage;