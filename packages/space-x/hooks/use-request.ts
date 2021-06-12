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
    onSuccess: (resp: ApiResponse) => void;
    onError?: (resp: ApiErrorResponse) => void;
    body?: object;
}
const useReq = (props: UseReqAttrs) => {
    const { url, method, body, onSuccess, onError } = props;
    const [reqError, setReqError] = useState<string>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const options = {
        withCredentials: true,
    };
    const doRequest = async () => {
        try {
            setReqError(null);
            setLoader(true);
            const response = await axios[method](url, body, options);
            if(onSuccess) {
                onSuccess(response.data);
            }
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