import { useTheme } from '@emotion/react'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function About() {
    const theme = useTheme()
    return (
        <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 600, color: theme.palette.subHeadingColor.main }}>About us</Typography>
            <Typography variant='h1'>We're a distributed team</Typography>
            <Typography variant='p' sx={{ marginTop: '10px' }}>We have offices and teams all around the world.</Typography>
            <Box component='img' src='images/map.png' sx={{ height: "700px", marginY: '60px' }} />
        </Container>
    )
}
