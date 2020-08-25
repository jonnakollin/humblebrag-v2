import styled from 'styled-components'
import { device } from '../theme/device'

const PageContainer = styled.div`
    margin: 40px 0;

      @media ${device.large} {
        margin: 70px 0;
    }
`

export default PageContainer