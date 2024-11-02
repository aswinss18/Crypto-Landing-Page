import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Button from '../ui/Button'

export default function Home() {
    return (
        <Container maxWidth='lg' sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: '10%', }}   >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative', }}>
                <Box component='img' src='/images/Ellipse 172.png' sx={{ position: 'absolute', zIndex: 0, top: '-200px', right: '-30px', width: "740px", height: "740px", }}>
                </Box>
                <Typography variant='h1' sx={{ fontSize: "90px", zIndex: 1 }}>live and
                    on-demand
                    trading</Typography>
                <Typography variant='p' sx={{ zIndex: 1, width: "80%" }}>Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</Typography>
                <Box sx={{ display: 'flex', gap: '60px' }}>
                    <Button type='primary'>Explore Now</Button>
                    <Box sx={{ display: 'flex', alignItems: "center", gap: "24px" }}>
                        <Box component='img' src='images/left.png' sx={{ width: '18px', height: '17px' }} />
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontSize: "32px", color: '#ffffff', fontFamily: "Inter", fontWeight: 200 }}>01-</Typography><Typography sx={{ fontSize: "32px", color: '#767799', fontFamily: "Inter", fontWeight: 200 }}>03</Typography>
                        </Box>
                        <Box component='img' src='images/right.png' sx={{ width: '18px', height: '17px' }} />
                    </Box>
                </Box>
            </Box>
            <Container sx={{ position: 'relative' }}>
                <Box component='img' src='images/star.svg' sx={{ position: 'absolute', height: '39px', width: "39px", left: '370px', top: "40px" }} />
                <Box component='img' src='images/star.svg' sx={{ position: 'absolute', height: '33px', width: "33px", left: '10px', top: "410px" }} />
                <Box component='img' src='images/star.svg' sx={{ position: 'absolute', height: '63px', width: "63px", left: '530px', top: "560px" }} />
                <Box component='img' src='/images/Wood-Hand.png' sx={{ width: "573px", height: "754px" }}></Box>
            </Container>
        </Container >
    )
}
