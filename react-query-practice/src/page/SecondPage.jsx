import React from 'react';
import { usePostQuery } from '../hooks/usePosts';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const SecondPage = () => {

const ids = [1, 2, 3, 4];

const fetchPostDetail = (id) => {
  return axios.get(`http://localhost:3004/posts/${id}`);
}

const results = useQueries({
  queries:ids.map((id) => {
    return {
      queryKey:["posts", id],
      queryFn: () => fetchPostDetail(id)
    };
  }),
  combine: (results) => {
    return {
      data: results.map((result) => result.data)
    };
  }
});
console.log("results:", results);

  // const { data, isLoading, isError, error, refetch } = usePostQuery();
  // console.log("data:", data);

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>
  // }

  return (
    <div>
      <h1>Second Page Here.</h1>
      {/* {data?.map(item => <div key={item.id}>{item.id}. {item.title}</div>)}
      <button onClick={refetch} style={{margin: "20px"}}>
        posts 리스트 다시 가져오기
      </button> */}
    </div>
  )
};

export default SecondPage;
