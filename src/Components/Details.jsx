import React, { useState, useEffect } from 'react';

const Details = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getFetch = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let details = await response.json();
            let arr = details.map((element, index) => {
                return <h1 key={index}>{element.id}</h1>
            })
            console.log(arr)
            setDetails(arr);
        }
        getFetch();
    }, [])

    return(
        <React.Fragment>
            <h1>Details</h1>
            {details}
        </React.Fragment>

    )
}

export default Details;