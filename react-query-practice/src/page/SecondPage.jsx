import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const SecondPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
    gcTime: 5000
  });
  console.log("*** data ***", data);
  console.log("*** isLoading ***", isLoading);
  console.log("*** isError ***", isError);
  console.log("*** error ***", error);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <h1>Second Page Here.</h1>
      {data.map(item => <div key={item.id}>{item.id}. {item.title}</div>)}
    </div>
  )
};

export default SecondPage;
