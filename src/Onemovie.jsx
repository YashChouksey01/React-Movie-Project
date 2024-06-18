// // // import React from "react";
// // // import { Apikey } from "./constants";
// // // import axios from "axios";
// // // import { useLoaderData } from "react-router-dom";

// // // export async function Loader2({ params }) {
// // //   const imdbID = params.imdbId;
// // //   const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${Apikey}&plot=full`;
// // //   try {
// // //     const response = await axios.get(url);
// // //     console.log(response);
// // //     console.log(response.data);

// // //     return { movie: response.data, iserror: false, error: "" };
// // //   } catch (error) {
// // //     const errormessage =
// // //       error?.response?.data?.Error || error.mesage || "something went wrong";
// // //     console.log(error);

// // //     return { movie: null, iserror: true, error: errormessage };
// // //   }
// // // }

// // // function Singlemovie() {
// // //   const { movie, iserror, error } = useLoaderData();
// // //   if (movie && movie.Response === "False") {
// // //     return <h1>{movie.Error}</h1>;
// // //   }
// // //   if (iserror) {
// // //     return <h1>{error}</h1>;
// // //   }
// // //   return (
// // //     <div
// // //       style={{ backgroundColor: "lightblue", padding: "2rem", margin: "1rem" }}
// // //     >
// // //       <img src={movie.Poster} alt="" />
// // //       <h3>Title:{movie.Title}</h3>
// // //       <h3> Released:{movie.Released}</h3>
// // //       <h3> Runtime:{movie.Runtime}</h3>
// // //       <h3>Actors:{movie.Actors}</h3>
// // //       <h3>BoxOffice:{movie.BoxOffice}</h3>
// // //       <h3>Director:{movie.Director}</h3>
// // //       <h3>Plot:{movie.Plot}</h3>
// // //       <h3>Released:{movie.Released}</h3>
// // //       <h3>Year:{movie.Year}</h3>
// // //       <h3> Awards:{movie.Awards}</h3>
// // //       <h3> imdbRating:{movie.imdbRating}</h3>
// // //       <h3> Country:{movie.Country}</h3>

// // //       <h3> Writer:{movie.Writer}</h3>
// // //     </div>
// // //   );
// // // }

// // // export default Singlemovie;

// // import React from "react";
// // import { Apikey } from "./constants";
// // import axios from "axios";
// // import { useLoaderData } from "react-router-dom";

// // export async function loader2({ params }) {
// //   const imdbId = params.imdbId;
// //   const endpoint2 = `https://www.omdbapi.com/?i=${imdbId}&apikey=${Apikey}&plot=full`;
// //   console.log(params.imdbId);

// //   try {
// //     const response = await axios.get(endpoint2);
// //     console.log(response.data);
// //     return { movie: response.data, iserror: false, error: "" };
// //   } catch (error) {
// //     console.log(error);
// //     errormsg = error?.response?.data?.error || error.message;
// //     return { movie: null, iserror: true, error: errormsg };
// //   }
// // }
// // function Onemovie() {
// //   const { movie, iserror, error } = useLoaderData();
// //   console.log(movie);
// //   if (movie && movie.response === "False") {
// //     return <h1>{movie.Error}</h1>;
// //   }
// //   if (iserror) {
// //     return <h1>{error}</h1>;
// //   }
// //   return (
// //     <div
// //       style={{ backgroundColor: "lightblue", padding: "2rem", margin: "1rem" }}
// //     >
// //       <img src={movie.Poster} alt="" />
// //       <h3>Title:{movie.Title}</h3>
// //       <h3> Released:{movie.Released}</h3>
// //       <h3> Runtime:{movie.Runtime}</h3>
// //       <h3>Actors:{movie.Actors}</h3>
// //       <h3>BoxOffice:{movie.BoxOffice}</h3>
// //       <h3>Director:{movie.Director}</h3>
// //       <h3>Plot:{movie.Plot}</h3>
// //       <h3>Released:{movie.Released}</h3>
// //       <h3>Year:{movie.Year}</h3>
// //       <h3> Awards:{movie.Awards}</h3>
// //       <h3> imdbRating:{movie.imdbRating}</h3>
// //       <h3> Country:{movie.Country}</h3>
// //     </div>
// //   );
// // }

// // export default Onemovie;




// import React from "react";
// import { Link } from "react-router-dom";



// function Onemovie({ Title, imdbID }) {
//   return (
//     <Link to={`/detail/${imdbID}`}>
//       <p>{Title}</p>{" "}
//     </Link>
//   );
// }

// export default Onemovie;


import React from 'react'
import { Apikey, apikey } from './constants'
import axios, { isAxiosError } from 'axios'
import {useLoaderData} from 'react-router-dom'



export async function loader2({params}){
  console.log(params.imdbid)
  const imdbid=params.imdbid
  try {
  const url=`https://www.omdbapi.com/?i=${imdbid}&apikey=${apikey}&plot=full`
  const response=await axios.get(url)
  console.log(response.data)
 
  return {movie: response.data,iserror:false,error:null}
 
} catch (error) {console.log(error)
   const errmsg=error.message ||error?.response?.data?.Error ||'something went wrong'
          return  {movie: null,iserror:true,error:errmsg}
  }
}


function Onemovie() {
  const {movie,iserror,error}=useLoaderData()
  // console.log(movie.Response)

  if(movie && movie.Response==='False'){return <h1>{movie.Error}</h1>}
  if(iserror){return <h1>{error}</h1>}
  return (
    <div  style={{ backgroundColor: "lightblue", padding: "2rem", margin: "1rem" }}>
           <img src={movie.Poster} alt="" />
      <h3>Title:{movie.Title}</h3>
      <h3> Released:{movie.Released}</h3>
      <h3> Runtime:{movie.Runtime}</h3>
      <h3>Actors:{movie.Actors}</h3>
      <h3>BoxOffice:{movie.BoxOffice}</h3>
       <h3>Director:{movie.Director}</h3>
       <h3>Plot:{movie.Plot}</h3>
       <h3>Released:{movie.Released}</h3>
       <h3>Year:{movie.Year}</h3>
       <h3> Awards:{movie.Awards}</h3>
       <h3> imdbRating:{movie.imdbRating}</h3>
       <h3> Country:{movie.Country}</h3>
     </div>
   
  )
}

export default Onemovie