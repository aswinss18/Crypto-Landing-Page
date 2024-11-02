import { Box, Typography } from '@mui/material'
import React from 'react'

export default function FooterItem({ data, title }) {

    return (
        <Box sx={{ height: "240px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', color: "#C23893" }}>{title}</Typography>

            {data.map((item, i) => <Typography sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', color: "#12132A" }} key={i}>{item}</Typography>)}

        </Box>
    )
}
