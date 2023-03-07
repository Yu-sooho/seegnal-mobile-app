import axios from 'axios'

export const DEV_URL = 'http://127.0.0.1:5001/seegnal-87296/us-central1/'

export const axiosApi = async (method = 'get', url, data) => {
    const requestUrl = `${DEV_URL}${url}`
    try {
        const result = await axios({
            method,
            url: requestUrl,
            params: data,
        });
        return result
    } catch (error) {
        return error
    }
}