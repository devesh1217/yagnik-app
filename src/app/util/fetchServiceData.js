// fetchServiceData.js
import axios from 'axios';

export async function fetchServiceData(id) {
    try {
        const [res, resp] = await Promise.all([
            axios.get('/api/microservices/all/' + id),
            axios.get('/api/services/get/' + id)
        ]);

        if (!res.data.success || !resp.data.success) {
            throw new Error('Failed to fetch data');
        }
        if (res.data.notFound || resp.data.notFound) {
            throw new Error('NotFound');
        }

        return {
            microservices: res.data.data,
            service: resp.data.data
        };
    } catch (err){
        console.log(err)
        throw new Error('Failed to fetch data');
    }
}
