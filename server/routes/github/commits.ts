import axios from 'axios';
import {HttpProxyAgent} from 'http-proxy-agent';

let data = null;
export default defineEventHandler(async event => {
    const query = getQuery(event);
    if (query.pageNum != undefined || query.pageSize != undefined)
        return getCommits(query.pageNum, query.pageSize)
    if (!data) data = await getCommits();
    return data;
});

async function getCommits(pageNum: number = 1, pageSize: number = 10) {
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
    const {data} = await axios.get(`https://api.github.com/repos/xjuunn/Renioo/commits?page=${pageNum}&per_page=${pageSize}`, config);
    return data;
}