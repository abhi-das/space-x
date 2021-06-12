import { useState } from 'react';
import axios from 'axios';

export interface ApiResponse {
    userId?: string;
    message?: string;
}
export interface ApiErrorResponse {
    message: string;
}
interface UseReqAttrs {
    url: string;
    method: string;
    onSuccess: (resp: ApiResponse) => void;
    onError?: (resp: ApiErrorResponse) => void;
    body?: object;
}
const useReq = (props: UseReqAttrs) => {
    const { url, method, body, onSuccess, onError } = props;
    const [reqError, setReqError] = useState<string>(null);
    const options = {
        withCredentials: true,
    };
    const doRequest = async () => {
        try {
            setReqError(null);
            const response = await axios[method](url, body, options);
            if(onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch(err) {
            setReqError("API endpoint error!!");
            if(onError) {
                onError(err.response.data);
            }
        }
    };

    return {
        doRequest,
        reqError
    }
}

export default useReq;