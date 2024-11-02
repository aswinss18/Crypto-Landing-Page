import { Box, Container } from '@mui/material'
import React from 'react'
import FooterItem from './FooterItem'

const productData = ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
const companyData = ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']
const resourceData = ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']
const socialData = ['Twitter', 'Linkedin', 'Facebook', 'GitHub', 'AngelList', 'Dribble']
const legalData = ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']



export default function Footer() {
    return (<>
        <Container maxWidth={false} sx={{ height: '353px', backgroundColor: "#ffffff", display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
            <FooterItem data={productData} title='Product' />
            <FooterItem data={companyData} title='Company' />
            <FooterItem data={resourceData} title='Resources' />
            <FooterItem data={socialData} title='Social' />
            <FooterItem data={legalData} title='Legal' />
        </Container>
        <Container maxWidth={false} sx={{ height: '120px', backgroundColor: "#C23893", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box sx={{ fontFamily: "Inter", fontSize: "16px", color: "#ffffff", }}>&copy; 2077 Untitled UI. All rights reserved.</Box>
            <Box sx={{ display: 'flex', gap: '24px' }}>
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social0.png' />
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social1.png' />
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social2.png' />
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social3.png' />
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social4.png' />
                <Box component='img' sx={{ height: "24px", width: "24px" }} src='images/social5.png' />
            </Box>
        </Container>
    </>
    )
}
