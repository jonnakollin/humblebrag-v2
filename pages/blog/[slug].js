import BlogPost from '../../components/pages/BlogPost/BlogPost'
import { getBlogPostBySlug } from '../../api/api';

const BlogPostPage = ({ post }) => {
    return (
        <BlogPost {...post.fields} />
    );
}

BlogPostPage.getInitialProps = async (context) => {
    const { slug } = context.query;
    const post = await getBlogPostBySlug(slug);
    return { post: post }
}

export default BlogPostPage;