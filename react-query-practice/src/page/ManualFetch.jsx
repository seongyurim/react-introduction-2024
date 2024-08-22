import React, { useEffect, useState } from 'react';

const ManualFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchPost = async () => {
    setIsLoading(true);
    const url = "http://localhost:3004/posts";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Manual Fetch Page Here.</h1>
      {data?.map(item => (<div key={item.id}>{item.id}. {item.title}</div>))}
    </div>
  )
};

export default ManualFetch;
