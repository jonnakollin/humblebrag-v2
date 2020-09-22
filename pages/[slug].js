import { Page as PageComponent } from '../components/pages/Page/Page'
import { getPageBySlug } from '../api/api'

const Page = ({ page }) => {
    return <PageComponent {...page} />
}

Page.getInitialProps = async (context) => {
    const { slug } = context.query
    const page = await getPageBySlug(slug)
    return { page: page }
}

export default Page