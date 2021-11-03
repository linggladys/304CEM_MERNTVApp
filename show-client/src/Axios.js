import axios from "axios";
// check the token and send the token
axios.defaults.baseURL="https://mern-tv-test.herokuapp.com/";
axios.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');
        const auth = token ? `Bearer ${token}`:'';
        config.headers.common['Authorization']=auth;
        return config;
    },
    (error) => Promise.reject(error)
);

export default axios;