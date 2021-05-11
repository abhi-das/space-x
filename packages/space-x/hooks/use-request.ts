import { useState } from 'react';
import axios from 'axios';

const useReq = ({ url, method, body }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            return response;
        } catch(err) {
            // console.error(`err=> ${JSON.stringify(err)}`)
            setErrors(err.response)
        }
    }

    return {
        doRequest,
        errors
    }
}

export default useReq;