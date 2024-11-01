
import { Box, Container, List, } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import NavLink from './NavLink'
import Button from './Button'
import { useTheme } from '@emotion/react'

export default function Navbar() {
    const theme = useTheme()
    return (

        <Container maxWidth='lg' sx={{
            display: 'flex', alignItems: 'center', justifyContent: "space-between", height: '64px', width: '100%', position: 'fixed', zIndex: 50, backgroundColor: theme.palette.primary.main
        }}>
            <Logo />
            <Box sx={{ display: 'flex', justifyContent: "flex-between", gap: '70px ', alignItems: 'center' }}>
                <List sx={{ display: 'flex', gap: "60px" }}>
                    <NavLink>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Events</NavLink>
                </List>
                <Button type='secondary'>Sign In</Button>
            </Box>
        </Container >
    )
}   
