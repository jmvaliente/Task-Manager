import clientAxios from './axios'

const tokenAuth = token =>{
    if(token){
        clientAxios.defaults.headers.common['x-auth-token'] = token
    }else{
        delete clientAxios.defaults.headers.common['x-aut-token']
    }
}

export default tokenAuth