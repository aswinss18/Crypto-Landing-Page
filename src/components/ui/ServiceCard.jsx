import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ServiceCard({ data, index }) {
    const theme = useTheme()
    return (
        <Box sx={{ width: '344px', height: '427px', border: `1px solid ${theme.palette.tertiary.main}`, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: "30px", position: 'relative', }}>
            <Box component='span' sx={{ fontFamily: "Inter", fontWeight: 100, fontSize: '32px', color: "#ffffff", position: 'absolute', top: "35px", left: "35px" }}>{`0${index + 1}`}</Box>
            <Box component='img' src={data.icon} sx={{ height: '84px', width: "84px", marginTop: '40px' }} />
            <Typography variant='h2' sx={{ textAlign: 'center', }}>{data.heading}</Typography>
            <Typography sx={{ color: '#ffffff', fontSize: '15px', textAlign: 'center', width: '80%' }}>{data.para}</Typography>
        </Box>
    )
}
