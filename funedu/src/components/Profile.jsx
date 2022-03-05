import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { fetchUser, toModifyAvatar, toModifyPassword } from '../services/userservice';
import { useSelector, useDispatch } from 'react-redux'
import { populateUser } from "../slices/userSlice";
import { format } from 'date-fns'

export const Profile = () => {
    const user = useSelector((state) => state.userReducer.value);
    console.log("user", user);
    const dispatch = useDispatch();
    const [modifyAvatar, setModifyAvatar] = useState(false);
    const [modifyPassword, setModifyPassword] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [avatarTip, setAvatarTip] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [oldPasswordTip, setOldPasswordTip] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordTip, setNewPasswordTip] = useState('');
    const [confirmMewPassword, setConfirmNewPassword] = useState('');
    const [confirmMewPasswordTip, setConfirmNewPasswordTip] = useState('');
    const [tipMessage, setTipMessage] = useState('');

    useEffect(() => {
        fetchUser().then((data) => {
            dispatch(populateUser(data));
        });
    }, [])

    const toggleModifyAvatar = () => {
        if (!modifyAvatar) {
            setModifyPassword(false);
        }
        setModifyAvatar(!modifyAvatar);
    }

    const toggleModifyPassword = () => {
        if (!modifyPassword) {
            setModifyAvatar(false);
        }
        setModifyPassword(!modifyPassword);
    }

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
        setAvatarTip(null);
    }

    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
        setOldPasswordTip(null);
    }

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setNewPasswordTip('');
        if (confirmMewPassword !== e.target.value) {
            setConfirmNewPasswordTip("Unmatched with the new password!");
        } else {
            setConfirmNewPasswordTip('');
        }
    }

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
        if (!newPassword) {
            setNewPasswordTip("This is required!");
        }
        if (e.target.value !== newPassword) {
            setConfirmNewPasswordTip("Unmatched with the new password!");
        } else {
            setConfirmNewPasswordTip('');
        }
    }

    const handleModifyAvatar = async () => {
        if (avatar) {
            const isOk = await toModifyAvatar(user.userId, avatar);
            if (isOk) {
                fetchUser().then((data) => {
                    dispatch(populateUser(data));
                    postUpdate('Update avatar successfully!');
                });
                return
            }
            postUpdate('Update avatar failed!');
        } else {
            setAvatarTip("Must provide an avatar url");
        }
    }

    const handleModifyPassword = async () => {
        if (oldPassword && newPassword && confirmMewPassword && (newPassword === confirmMewPassword)) {
            const isOk = await toModifyPassword(user.userId, oldPassword, newPassword);
            if (isOk) {
                fetchUser().then((data) => {
                    dispatch(populateUser(data));
                    postUpdate('Update password successfully!');
                });
                return
            }
            postUpdate('Update password failed!');
        }
    }

    const postUpdate = (message) => {
        setTipMessage(message);
    }

    return (
        <Paper elevation={12} sx={{ heigh: '10em', maxWidth: '20em', margin: 'auto', pb: '1em' }} >
            <Typography variant="h5" sx={{ backgroundColor: '#1976D2', p: '0.3em', color: '#eee' }}>
                Profile
            </Typography>
            <Divider variant="middle" />
            <Box component={'div'} sx={{ display: 'flex', m: '0.2em', p: '0.2em', textAlign: 'center', alignItems: "center" }}>
                <ListItem sx={{ maxWidth: '10em' }}>
                    <ListItemAvatar>
                        <Avatar alt={user.userName}
                            sx={{ width: 86, height: 86 }} src={user.avatar}
                            onClick={() => {
                                setModifyAvatar(!modifyAvatar);
                            }}
                        >
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="h6"
                        color="text.primary"
                    >
                        {user.userName}
                    </Typography>} secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="subtitle2"
                                color="text.primary"
                            >
                                Created Date :
                            </Typography>
                            {/* {user.createdOn} */}
                            {format(new Date(user.createdOn), 'yyyy-dd-MM HH:ss:mm')}
                        </>
                    } sx={{ marginLeft: '0.1em' }} />
                </ListItem>
                <Box component='div'>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', pt: '0.1em' }}>
                        <EmailIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            {user.login}
                        </Typography>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', pt: '0.1em' }}>
                        <PhoneAndroidIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            +86 13810668830
                        </Typography>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', pt: '0.1em' }}>
                        <PermIdentityIcon fontSize="small" />
                        <Typography sx={{ pl: '0.2em' }} variant="subtitle2" color="text.secondary">
                            {user.userId}
                        </Typography>
                    </Box>
                </Box>
            </Box >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", p: '0.1em 0.4em 0.1em 0.4em' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                        checked={modifyAvatar}
                        onChange={toggleModifyAvatar}
                        color="primary"
                    />
                    <Typography sx={{ fontSize: '0.3em', pl: '0.1em' }}>
                        Modify avatar
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                        checked={modifyPassword}
                        onChange={toggleModifyPassword}
                        color="primary"
                    />
                    <Typography sx={{ fontSize: '0.3em', pl: '0.1em' }}>
                        Modify password
                    </Typography>
                </Box>
            </Box>

            {
                modifyAvatar && <Box >
                    <TextField
                        required
                        label="New avatar"
                        type="text"
                        // value={avatar}
                        sx={{ mt: '0.3em', width: "90%", alignSelf: 'center' }}
                        onKeyUp={handleAvatarChange}
                        helperText={avatarTip}
                    />
                    <Button variant="contained"
                        color="primary"
                        sx={{ mt: '0.3em', width: "90%", alignSelf: 'center' }}
                        onClick={handleModifyAvatar}
                    >
                        Modify Avatar
                    </Button>
                </Box>
            }
            {
                modifyPassword &&
                <Box>
                    <TextField
                        required
                        label="Old password"
                        type="password"
                        // value={oldPassword}
                        sx={{ mt: '0.3em', width: "90%" }}
                        onKeyUp={handleOldPasswordChange}
                        helperText={oldPasswordTip}
                    />
                    <TextField
                        required
                        label="New password"
                        type="password"
                        // value={newPassword}
                        sx={{ mt: '0.3em', width: "90%" }}
                        onKeyUp={handleNewPasswordChange}
                        helperText={newPasswordTip}
                    />
                    <TextField
                        required
                        label="Confirm new password"
                        type="password"
                        // value={confirmMewPassword}
                        sx={{ mt: '0.3em', width: "90%" }}
                        onKeyUp={handleConfirmNewPasswordChange}
                        helperText={confirmMewPasswordTip}
                    />
                    <Button variant="contained"
                        color="primary"
                        sx={{ mt: '0.3em', width: "90%" }}
                        onClick={handleModifyPassword}
                    >
                        Modify Password
                    </Button>
                </Box>
            }
            <Box>
                <Snackbar
                    open={Boolean(tipMessage)}
                    autoHideDuration={6000}
                    onClose={() => { setTipMessage(null); }}
                    message={tipMessage}
                />
            </Box>
        </Paper >
    )
}
