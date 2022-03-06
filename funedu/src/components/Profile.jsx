import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { fetchUser, toModifyAvatar, toModifyPassword } from '../services/userservice';
import { useSelector, useDispatch } from 'react-redux'
import { populateUser } from "../slices/userSlice";
import { PageTitle } from './PageTitle';
import { ProfileItem } from './ProfileItem';

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
        setModifyAvatar(false);
        setModifyPassword(false);
    }

    // style
    const editLineStyle = { mt: '0.7em', width: "90%" };

    return (
        <Paper elevation={12} sx={{
            heigh: '10em',
            width: {
                xs: '100%',
                sm: '90%'
            },
            maxWidth: '45em',
            margin: 'auto',
            pb: '1em'
        }}
        >
            <PageTitle title='PROFILE' />
            <ProfileItem user={user} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", p: '0.1em 0.4em 0.1em 0.4em' }}>
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
            </Box>

            {
                modifyAvatar && <Box >
                    <TextField
                        required
                        label="New avatar"
                        type="text"
                        // value={avatar}
                        sx={editLineStyle}
                        onKeyUp={handleAvatarChange}
                        helperText={avatarTip}
                    />
                    <Button variant="contained"
                        color="primary"
                        sx={editLineStyle}
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
                        sx={editLineStyle}
                        onKeyUp={handleOldPasswordChange}
                        helperText={oldPasswordTip}
                    />
                    <TextField
                        required
                        label="New password"
                        type="password"
                        sx={editLineStyle}
                        onKeyUp={handleNewPasswordChange}
                        helperText={newPasswordTip}
                    />
                    <TextField
                        required
                        label="Confirm new password"
                        type="password"
                        sx={editLineStyle}
                        onKeyUp={handleConfirmNewPasswordChange}
                        helperText={confirmMewPasswordTip}
                    />
                    <Button variant="contained"
                        color="primary"
                        sx={editLineStyle}
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
