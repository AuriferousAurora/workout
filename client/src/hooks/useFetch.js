import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
//   const [pending, setPending] = useState(true);
//   const [error, setError] = useState(null);
  
    useEffect(() => {
        const abortCont = new AbortController(); 

        fetch(url)
            .then((res) =>{
                if (!res.ok) throw Error('Could not fetch data.');
                return res.json()
            })
            .then(data => {      
                setData(data);
                // setError(null);
                // setPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                  console.log('fetch aborted');
                } else {
                //   setPending(false);
                //   setError(err);
                }
            })
        return () => abortCont.abort();
    }, [url])

    return { data };
}