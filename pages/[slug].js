import PageComponent from '../components/pages/Page/Page'
import { getAllPagesWithSlug, getPageBySlug } from '../api/api'

const Page = ({ page }) => {
    return <PageComponent {...page} />
}

export const getStaticPaths = async () => {
    const pages = await getAllPagesWithSlug()
    const paths = pages.map((page) => ({
        params: { slug: page.slug },
    }))
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const page = await getPageBySlug(params?.slug)
    return {
        props: {
            page,
        },
    }
}

export default Page