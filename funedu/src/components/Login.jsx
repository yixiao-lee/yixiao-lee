import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux'
import { populateUser } from "../slices/userSlice";
import { fetchUser, toLogin } from "../services/userservice";
import { useNavigate } from "react-router-dom";
import { PageTitle } from './PageTitle';

export const Login = () => {
    const [tipMessage, setTipMessage] = useState('');
    const navigate = useNavigate();
    // const user = useSelector((state) => state.userReducer.value);

    useEffect(() => {
        console.log("Login useEffect...");
        fetchUser().then((data) => {
            // console.log("effect data : " + JSON.stringify(data));
            dispatch(populateUser(data));
            // console.log("effect user : " + JSON.stringify(user));
            console.log("..." + data.userId);
            //   if (data.userId) {
            //     chageStatusOnSuccessLogin();      
            //   }
            console.log("exit Login useEffect...");
            if (data.userId) {
                handSuccessLogin();
            }
        });
    }, [])

    const dispatch = useDispatch();
    // const [isAuth, setIsAuth] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginName, setLoginName] = useState(null);
    const [pass, setPass] = useState(null);

    const handleSignin = async () => {
        if (loginName && pass) {
            const isOk = await toLogin(loginName, pass, 'AAdmin');
            if (isOk) {
                setTipMessage("Login success!");
                fetchUser().then((data) => {
                    dispatch(populateUser(data));
                    handSuccessLogin();
                });
                return
            }
            setTipMessage("Login failed, please check the user name or password!");
        }
    }

    const handSuccessLogin = () => {
        // TODO send redirect to target url
        navigate("profile");
    }

    const itemLineStyle = { mt: '0.7em', width: "90%" };

    return (
        <Paper elevation={12} sx={{
            width: {
                xs: '100%',
                sm: '30em'
            },
            margin: 'auto',
            pb: '1em'
        }}>
            <PageTitle title='SIGN-IN CONSOLE' />
            <TextField
                required
                label="Email"
                type="text"
                sx={{ mt: '1em', width: "90%" }}
                onChange={(e) => {
                    setLoginName(e.target.value);
                    setErrorMessage(null);
                }}
            />
            <TextField
                required
                label="Password"
                type="password"
                sx={itemLineStyle}
                onChange={(e) => {
                    setPass(e.target.value);
                    setErrorMessage(null);
                }}
                helperText={errorMessage}
            />

            <Button variant="contained"
                color="primary"
                sx={itemLineStyle}
                onClick={handleSignin}
            >
                Sign in
            </Button>
            <Box>
                <Snackbar
                    open={Boolean(tipMessage)}
                    autoHideDuration={6000}
                    onClose={() => { setTipMessage(null); navigate("profile"); }}
                    message={tipMessage}
                />
            </Box>
        </Paper>
    )
}
