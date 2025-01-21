import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, auto));
    grid-auto-rows: minmax(375px, auto);
    row-gap: 65px;
    column-gap: 46px;
    justify-items: center;

@media ${theme.media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
}
`
