import styled from '@emotion/styled';
import { Poppins } from 'next/font/google';

const popinsSemiBold = Poppins({ style: "normal", weight: "500", subsets:["latin"] })

export const SiteTitle = styled.div`
    color: ${props => props.theme.pink}
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const HeaderLinks = styled.div`
    font-family: popinsSemiBold;
    font-weight: 400;
`