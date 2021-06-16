import { useState } from 'react';
import axios from 'axios';

export interface ApiResponse {
    userId?: string;
    message?: string;
}
export interface ApiErrorResponse {
    message?: string;
}
interface UseReqAttrs {
    url: string;
    method: string;
    onSuccess: (resp: object) => void;
    onError?: (resp: ApiErrorResponse) => void;
    body?: object;
    headers?: object;
}
const useReq = (props: UseReqAttrs) => {
    const { url, method, body, onSuccess, onError, headers } = props;
    const [reqError, setReqError] = useState<string>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const options = {
        withCredentials: true,
        ...headers
    };
    const doRequest = async () => {
        setLoader(true);
        try {
            setReqError(null);
            const response = await axios[method](url, body, options);
            if(onSuccess) {
                onSuccess(response.data);
            }
            setLoader(false);
            return response.data;
        } catch(err) {
            setLoader(false);
            // If API server down send this message only
            setReqError("API endpoint error!!");
            // if not the API server down error the send the error response
            if(err.response) {
                onError ? onError(err.response.data) : null;
            }
        }
    };

    return {
        doRequest,
        reqError,
        loader
    }
}

export default useReq;