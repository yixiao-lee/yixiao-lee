import httpClient from '../apis/api'

const fetchUser = async () => {
    const response = await httpClient.get(`/api/current-user`).catch( (error) => {
        console.log(error);
    })
    if (response) {
        console.log(response)
        return response.data;
    }
    return {}
}

const toLogin = async (user, pass, appId) => {
    console.log("input: " + user + pass + appId);
    const response = await httpClient.post(`/auth/login`, {
        appId : appId
    }, {
        headers: {
            'Content-Type': 'application/json',
            'principal': user,
            'credential': pass
        }
    }).catch( (error) => {
        console.log(error);
    })
    console.log(response)
    if (response && response.status === 200) {
        console.log(response)
        return true;
    }
    return false  
}

export {fetchUser, toLogin}

