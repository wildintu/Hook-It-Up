import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";


const Details = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getFetch = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let details = await response.json();
            let arr = details.map((element, index) => {
                return <p key={index}>
                    {element.id}
                    {element.title}
                    {element.body}
                    </p>
            })
            
            //console.log(details)
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