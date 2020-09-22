import HomePage from '../components/pages/HomePage/HomePage'
import { getAllPosts } from '../api/api'

const Home = ({ posts }) => (<HomePage posts={posts} />)

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Home
