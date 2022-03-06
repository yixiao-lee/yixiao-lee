import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Divider from '@mui/material/Divider';
import { format } from 'date-fns'

export const ProfileItem = (props) => {
    const user = props.user;
    // style
    const itemBoxStyle = { display: 'flex', alignItems: 'center', pt: '0.2em' };
    return (
        <div>
            <Box component={'div'} sx={{
                display: 'flex',
                m: '0.1em',
                p: '0.1em',
                textAlign: 'center',
                width: {
                    xs: '100%',
                    sm: '90%'
                }
            }}>
                <ListItem sx={{
                    width: "50%"
                }}>
                    <ListItemAvatar sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }
                    }>
                        <Avatar alt={user.userName}
                            sx={{ width: 76, height: 76, alignSelf: 'center' }} src={user.avatar}
                        >
                        </Avatar>
                        <Typography
                            sx={{
                                fontSize: '1.1em',
                                fontWeight: 400,
                                display: 'block'
                            }}
                            component="span"
                            color="text.primary"
                        >
                            {user.userName}
                        </Typography>
                        <Typography
                            sx={{
                                display: 'block',
                                fontSize: '0.1em',
                                color: 'lightgray',
                            }}
                        >
                            <span>Created at </span>
                            {format(new Date(user.createdOn), 'MMM dd, yyyy')}
                        </Typography>
                    </ListItemAvatar>
                </ListItem>
                <Box component='div' sx={{
                    paddingTop: '0.6em'
                }}>
                    <Box component='div' sx={itemBoxStyle}>
                        <EmailIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            {user.login}
                        </Typography>
                    </Box>
                    <Box component='div' sx={itemBoxStyle}>
                        <PhoneAndroidIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            {user.mobile}
                        </Typography>
                    </Box>
                    <Box component='div' sx={itemBoxStyle}>
                        <PermIdentityIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            {user.userId}
                        </Typography>
                    </Box>
                </Box>
            </Box >
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", p: '0.1em 0.4em 0.1em 0.4em' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                        checked={modifyAvatar}
                        onChange={toggleModifyAvatar}
                        color="primary"
                    />
                    <Typography sx={{ fontSize: '0.7em', pl: '0.1em' }}>
                        Modify avatar
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                        checked={modifyPassword}
                        onChange={toggleModifyPassword}
                        color="primary"
                    />
                    <Typography sx={{ fontSize: '0.7em', pl: '0.1em' }}>
                        Modify password
                    </Typography>
                </Box>
            </Box> */}
            <Divider variant="middle" />
        </div>
    )
}
