import React from 'react'
import Typography from '@mui/material/Typography';

export const PageTitle = (props) => {
    return (
        <>
            <Typography variant="h6" sx={{ backgroundColor: 'primary.main', p: '0.3em', color: '#eee' }}>
                {props.title}
            </Typography>
        </>
    )
}
