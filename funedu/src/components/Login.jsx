import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { populateUser } from "../slices/userSlice";
import { fetchUser, toLogin } from "../services/userservice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    let navigate = useNavigate();
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
                fetchUser().then((data) => {
                    dispatch(populateUser(data));
                    handSuccessLogin();
                });
                return
            }
            setErrorMessage("Login failed!, please check the user name or password!");
        }
    }

    const handSuccessLogin = () => {
        // TODO send redirect to target url
        navigate("/home");
    }

    return (
        <Box component="form" sx={{ backgroundColor: '#ddd', maxWidth: '20em', margin: 'auto', borderRadius: '0.2em', pb: '1em' }}>
            <Typography variant="h6" component="h2" sx={{ pt: '1em', alignSelf: 'center' }}>
                Please sign in
            </Typography>
            <TextField
                required
                label="Email"
                type="text"
                sx={{ mt: '1em', width: "95%", alignSelf: 'center' }}
                onChange={(e) => {
                    setLoginName(e.target.value);
                    setErrorMessage(null);
                }}
            />
            <TextField
                required
                label="Password"
                type="password"
                sx={{ mt: '1em', width: "95%", alignSelf: 'center' }}
                onChange={(e) => {
                    setPass(e.target.value);
                    setErrorMessage(null);
                }}
                helperText={errorMessage}
            />

            <Button variant="contained"
                color="primary"
                sx={{ mt: '1em', width: "95%", alignSelf: 'center' }}
                onClick={handleSignin}
            >
                Sign in
            </Button>
        </Box>
    )
}
