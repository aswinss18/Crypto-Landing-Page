import { Box, Typography } from '@mui/material'

import React from 'react'

export default function TestimonialCard({ data }) {
    return (
        <Box sx={{ width: "379px", height: "681px", backgroundImage: `url(${data.image})`, borderRadius: "24px", backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }} >
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: "100%", alignItems: 'center', marginBottom: "30px", zIndex: 10 }}>
                <Box >
                    <Typography sx={{ fontWeight: 600, fontSize: '22px', color: '#ffffff' }}>{data.name}</Typography>
                    <Typography sx={{ fontSize: '16px', color: '#BEBEBE' }}>{data.job}</Typography>
                </Box>
                <Box sx={{
                    height: '70px', width: '70px', border: "2.4px solid #ffffff", borderRadius: '22px', backdropFilter: "blur(10px)", display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}>
                    <Box component='img' src={data.play === true ? "images/pause.png" : "images/play.png"
                    } />
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '20%', borderRadius: "24px", position: 'absolute', backgroundColor: "#000000", filter: 'blur(90px)', }}></Box>
        </Box >
    )
}
