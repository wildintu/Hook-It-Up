import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsSingle = () => {
  let { id } = useParams();
  const [detailssingle, setDetailsSingle] = useState([]);

  useEffect(() => {
    const getFetch = async () => {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      let detailssingle = await response.json();
      setDetailsSingle(detailssingle);
    };
    getFetch();
  }, [id]);

  return (
    <React.Fragment>
      <h1>Details</h1>
      <p>{detailssingle.id}</p>
      <p>{detailssingle.title}</p>
      <p>{detailssingle.body}</p>
    </React.Fragment>
  );
};

export default DetailsSingle;
