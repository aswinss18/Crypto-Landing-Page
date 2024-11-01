import { useTheme } from '@emotion/react';
import { ListItem } from '@mui/material';
import React from 'react';

export default function NavLink({ children }) {
    const theme = useTheme();
    return (
        <ListItem component='li' sx={{
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Inter",
            color: theme.palette.secondary.nav,
            position: 'relative',
            width: 'fit-content',

            '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                bottom: 0,
                height: '2px',
                width: '50%',
                backgroundColor: "#ffffff",
                transform: 'translateX(-50%) scaleX(0)',
                transition: 'transform 0.3s ease-in-out',
            },
            '&:hover::after': {
                transform: 'translateX(-50%) scaleX(1)',
            },
            '&:hover': { color: "#FFFFFF" }
        }}>
            {children}
        </ListItem>
    );
}
