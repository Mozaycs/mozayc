import React from 'react';
import { HeaderLinks, HeaderWrapper, SiteTitle } from './header.style';
import { Box } from '@/styles/globals.style';


export default function Header() {
    return (
        <HeaderWrapper>
            <SiteTitle>Header</SiteTitle>
            <Box>
                <HeaderLinks>Features</HeaderLinks>
                <HeaderLinks>Pricing</HeaderLinks>
                <HeaderLinks>Showcases</HeaderLinks>
                <HeaderLinks>Help Center</HeaderLinks>
                <HeaderLinks>Blog</HeaderLinks>
            </Box>
            <Box>
                nice
            </Box>
        </HeaderWrapper>
    )
}