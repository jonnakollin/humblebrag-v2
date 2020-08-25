import HomePage from '../components/HomePage/HomePage';
import { createClient } from '../contentful'

const client = createClient()

const Home = ({ posts }) => (<HomePage posts={posts} />)

Home.getInitialProps = async () => {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt"
  });
  return { posts: entries.items }
}

export default Home
