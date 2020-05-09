import config from './config.json';
import { createClient } from 'contentful'

const clientConfig = {
    space: config.CONTENFUL_SPACE_ID,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
    createClient() {
        return createClient(clientConfig)
    }
}