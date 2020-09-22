import { createClient } from 'contentful'

const clientConfig = {
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

module.exports = {
    createClient() {
        return createClient(clientConfig)
    }
}