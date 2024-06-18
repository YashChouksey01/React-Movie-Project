// // import React from "react";

// // import Movielist from "./component/Movielist";
// // import Searchform from "./component/Searchform";
// // import { Apikey } from "./constants";
// // import axios from "axios";
// // import { useLoaderData } from "react-router-dom";

// // export async function Loader({ request }) {
// //   const url = new URL(request.url);
// //   const searchparam = url.searchParams.get("search") || "rose";

// //   try {
// //     const movieurl = `https://www.omdbapi.com/?s=${searchparam}&apikey=${Apikey}`;
// //     const response = await axios.get(movieurl);
// //     return { movieApiResponse: response.data, searchparam, iserror: false };

// // } catch (error) {
// //     const errormessage = error?.response?.data?.Error || error.message;
// //     console.log(error);
// //     return { movieApiResponse: null, searchparam, iserror: true ,error:errormessage};
// //   }
// // }

// // function Home() {
// //   const data = useLoaderData();
// //   return (
// //     <div>
// //       <Searchform searchParams={data.searchParam} />
// //       <Movielist data={data} />
// //     </div>
// //   );
// // }

// // export default Home;

// // import React from "react";
// // import Movielist from "./component/Movielist";
// // import Searchform from "./component/Searchform";
// // import { Apikey } from "./constants";
// // import axios from "axios";
// // import { useLoaderData } from "react-router-dom";

// // export async function Loader({ request }) {
// //   const url = new URL(request.url);
// //   const searchpara = url.searchParams.get("search") || "rose";

// //   try {
// //     const endpoint = `https://www.omdbapi.com/?s=${searchpara}&apikey=${Apikey}`;
// //     const response = await axios.get(endpoint);
// //     return {
// //       movieAPiResponse: response.data,
// //       searchpara,
// //       iserror: false,
// //       error: "",
// //     };
// //   } catch (error) {
// //     const errormsg =
// //       error?.response?.data?.Error || error.message || "something went wrong";
// //     console.log(error);
// //     return {
// //       movieAPiResponse: null,
// //       searchpara,
// //       iserror: true,
// //       error: errormsg,
// //     };
// //   }
// // }

// // function Home() {
// //   const data = useLoaderData();
// //   return (
// //     <div>
// //       <Searchform searchterm={data.searchPara} />
// //       <Movielist data={data} />
// //     </div>
// //   );
// // }

// // export default Home;

// import React from "react";
// import Searchform from "./component/Searchform";
// import Moviecard from "./Moviecard";
// import { Apikey } from "./constants";
// import axios from "axios";
// import { useLoaderData } from "react-router-dom";

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const searchpara = url.searchParams.get("search") || "rose";
//   const endpoint = `https://www.omdbapi.com/?s=${searchpara}&apikey=${Apikey}`;
//   try {
//     const response = await axios.get(endpoint);
//     console.log(response.data);
//     return { movieApiResponse: response.data, searchpara,iserror:false,error:'' };
//   }
//    catch (error) {
//     const errormsg=error?.response?.data?.Error||error.message
//     return {movieApiResponse: null,searchpara,iserror:true,error:errormsg}
//   }
// }

// function Home() {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     <div>
//       <Searchform search={data.searchpara} />
//       <Moviecard data={data} />
//     </div>
//   );
// }

// export default Home;

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
