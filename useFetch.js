import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(parsedData => setData(parsedData))
                .catch(err => {
                    console.log('useFetch error ', err);
                    setData([]);
                });
        }, 2000);
    }, []);

    return data;
}