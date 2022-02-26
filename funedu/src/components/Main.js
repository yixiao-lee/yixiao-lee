import React, {useState} from 'react'
// import "./Main.css"
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';

const Main = () => {
    const [isLogin, setIslogin] = useState(true);
    let button;
    if (isLogin) {
        button = <button type="button" className="btn btn-primary">Sign in</button>;
    } else {
        button = <button  type="button" className="btn btn-primary">Register</button>;
    }

    return (

      <Box
      component="form"
      sx={{ m: 1, width: '25ch' }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
        // <div className="main">
        //     <div className="main_title">
        //         Please <a className="btn btn-link" onClick={() => {setIslogin(true)}}>sign in</a> or <a className="btn btn-link" onClick={() => {setIslogin(false)}}>register</a>
        //     </div>
        //     <form>
        //       {!isLogin && 
        //         <input type="text" placeholder="input your name"/>
        //       }
        //         <input type="text" placeholder="input your email"/>
        //         <input type="password" placeholder="input your password"/>
        //       {!isLogin && 
        //         <input type="password" placeholder="confirm your password"/>
        //       }
        //         {button}
        //     </form>
        // </div>
    )
}

export default Main
