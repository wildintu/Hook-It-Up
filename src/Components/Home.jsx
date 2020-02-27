import React, { useState, useEffect } from 'react';
// import Details from './Details';
import { Link } from "react-router-dom";

const Home = () => {
    const [home, setHome] = useState([]);

    useEffect(() => {
        const getFetch = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let home = await response.json();
            let arr = home.map((element, index) => {
                return <h4 key={index}>
                    {element.id}
                    {<Link to={`/${element.id}/details/${element.id}`}> Details</Link>}
                    </h4>
                    
                    //console.log(element.id)
            })
            setHome(arr);
        }
        getFetch();
    }, [])

    return(
        <React.Fragment>
            <h1>Home</h1>
            {home}
        </React.Fragment>

    )
}

export default Home;