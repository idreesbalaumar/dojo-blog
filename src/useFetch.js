
import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCount = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCount.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network response was not ok')
                    }
                    return response.json()
                }
                )
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(error => {
                    if (error.name === 'AbortError') {

                    } else {
                        setIsLoading(false);
                        setError(error.message);

                    }
                })
        }, 2000);

        return () => abortCount.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;