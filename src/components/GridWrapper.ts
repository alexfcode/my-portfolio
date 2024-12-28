import styled from 'styled-components'

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, auto));
    grid-auto-rows: minmax(375px, auto);
    row-gap: 65px;
    column-gap: 46px;
    justify-items: center;
`
