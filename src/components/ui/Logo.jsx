import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Logo() {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: '10px' }}>
            <Box sx={{ width: "33px", height: "33px" }} component='img' src="images/logo.png" alt="" />
            <Typography variant='h2' sx={{ fontSize: "23px", fontWeight: '600' }}>Crypton</Typography>
        </Box>
    )
}
