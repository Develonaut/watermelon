import { CLIENT_ID } from 'src/constants';

export const getFetch = (url: string) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Client-Id': CLIENT_ID,
            'Accept': 'application/json',
        },
    });
};
