import React, {useState} from 'react'
import "./Main.css"

const Main = () => {
    const [isLogin, setIslogin] = useState(true);
    let button;
    if (isLogin) {
        button = <button type="button" className="btn btn-primary">Sign in</button>;
    } else {
        button = <button  type="button" className="btn btn-primary">Register</button>;
    }

    return (
        <div className="main">
            <div className="main_title">
                Please <a className="btn btn-link" onClick={() => {setIslogin(true)}}>sign in</a> or <a className="btn btn-link" onClick={() => {setIslogin(false)}}>register</a>
            </div>
            <form>
              {!isLogin && 
                <input type="text" placeholder="input your name"/>
              }
                <input type="text" placeholder="input your email"/>
                <input type="password" placeholder="input your password"/>
              {!isLogin && 
                <input type="password" placeholder="confirm your password"/>
              }
                {button}
            </form>
        </div>
    )
}

export default Main
