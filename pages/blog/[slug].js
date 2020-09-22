import BlogPost from '../../components/pages/BlogPost/BlogPost'
import { getAllBlogPostsWithSlug, getBlogPostBySlug } from '../../api/api';

const BlogPostPage = ({ post }) => {
    return (
        <BlogPost
            title={post?.fields?.title}
            teaserImage={post?.fields?.teaserImage?.fields.file.url}
            publishedDate={post?.fields?.publishedDate}
            category={post?.fields?.category}
            content={post?.fields?.content}
            images={post?.fields?.images?.map(({ fields }) => fields.file.url)}
        />
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
    console.log('hej,', postBySlug?.fields?.images?.map(({ fields }) => fields.file.url))
    return { props: { post: postBySlug } }
}

export default BlogPostPage;