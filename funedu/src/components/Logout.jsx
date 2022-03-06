import React, { useEffect } from 'react'
import { clearAuthCookies } from "../utils/LocalHelper";
import { useDispatch } from 'react-redux'
import { resetUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        clearAuthCookies();
        dispatch(resetUser());
        navigate("/");
    }, [])

    return (
        <div>Logout...</div>
    )
}
