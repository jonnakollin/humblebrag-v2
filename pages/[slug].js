import { createClient } from '../contentful'
import StyledPage from '../components/Page/Page'

const client = createClient()

const Page = ({ page }) => {
    return <StyledPage {...page.fields} />
}

Page.getInitialProps = async (context) => {
    const { slug } = context.query;
    const entries = await client.getEntries({
        content_type: "page",
        "fields.slug": slug
    });
    return { page: entries.items[0] }
}

export default Page