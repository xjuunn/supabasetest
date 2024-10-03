import axios from 'axios';
import {HttpProxyAgent} from 'http-proxy-agent';

let data = null;
let minutes = '';
export default defineEventHandler(async () => {
    if (!data || minutes != new Date().getMinutes()) data = await getCommits();
    minutes = new Date().getMinutes();
    return data;
});

async function getCommits() {
    const runtimeConfig = useRuntimeConfig();
    const headers = {Authorization: `Bearer ${runtimeConfig.public.githubToken}`};
    let http_proxy = runtimeConfig.public.HTTP_PROXY;
    let config;
    if (http_proxy.length >= 4) {
        if (!http_proxy.includes('http')) http_proxy = 'http://' + http_proxy;
        const agent = new HttpProxyAgent(http_proxy);
        config = {headers, httpAgent: agent, httpsAgent: agent};
    } else {
        config = {headers};
    }
    const {data} = await axios.get(`https://api.github.com/repos/xjuunn/Renioo`, config);
    return data;
}