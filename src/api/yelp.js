import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer iw26qb0VRkIpTdOvt7tEy-DZnizJqaaE2KKGCSJ5owhkPaH0ugidSK2NdGjgETWcs3S1JRzBftnsygeMPFzHtCFt3A0QU-hHwEL7yMS5RhR5E-8K0xkwM_q5xxc9ZXYx'
    }
})