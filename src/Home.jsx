

import React from "react";
import Movielist from "./component/Movielist";
import Searchform from "./component/Searchform";
import { Apikey } from "./constants";
import axios, { isAxiosError } from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchparam = url.searchParams.get("title") || "one piece";
  console.log(searchparam);
  try {
    const endpoint = `https://www.omdbapi.com/?s=${searchparam}&apikey=${Apikey}`;
    const response = await axios.get(endpoint);
    console.log(response.data);

    return { movieresponse: response.data, searchparam ,iserror:false,error:null};
 
  } catch (error) {
    console.log(error);
    const errormsg=error?.response?.data?.Error || error.message ||'something went wrong'
   
    return {movieresponse:null,searchparam,iserror:true,error: errormsg}
  }
}

function Home() {
  const data = useLoaderData();
  return (
    <div>
      <Searchform search={data.searchParam} />
      <Movielist data={data} />
    </div>
  );
}

export default Home;
