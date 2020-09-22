import HomePage from '../components/pages/HomePage/HomePage'
import { getAllPosts } from '../api/api'

const Home = ({ posts }) => (<HomePage posts={posts} />)

Home.getInitialProps = async () => {
  const posts = await getAllPosts()
  return { posts }
}

export default Home
