import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ServiceCard from '../ui/ServiceCard'

const servicesData = [{ icon: 'images/service1.png', heading: `Connect wallet & exchanges`, para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.` },
{ icon: 'images/service2.png', heading: `Connect wallet & exchanges`, para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.` },
{ icon: 'images/service3.png', heading: `Connect wallet & exchanges`, para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.` },]


export default function Services() {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "40px", marginTop: "64px", }}>
            <Typography variant='h1' sx={{ textAlign: 'center' }}>Automated portfolio tracking</Typography>
            <Typography variant='p' sx={{ width: '924px', textAlign: 'center' }}>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {servicesData.map((service, i) => <ServiceCard data={service} key={i} index={i} />)}
            </Box>
        </Container>
    )
}
