// // // import React from "react";
// // // import Moviecard from "../Moviecard";

// // // function Movielist({ data }) {
// // //   console.log(data);
// // //   const { movieApiResponse, iserror, error } = data;
// // //   if(iserror){
// // //     return <h1>{error}</h1>
// // //   }

// // //   console.log(movieApiResponse.Search);
// // //   if (movieApiResponse && movieApiResponse.Response === "False") {
// // //     return <h1>{movieApiResponse.Error}</h1>;
// // //   }

// // //   //   if (movieresponce && movieresponce.Response === "False") {
// // //   //     return <h1>{movieresponce.Error || "No Result Found"}</h1>;
// // //   //   }
// // //   return (
// // //     <div>
// // //       {movieApiResponse.Search.map((mv) => (<Moviecard key={mv.imdbID} {...mv}/>

// // //       ))}
// // //        {/* <p key={mv.imdbID}>{mv.Title}</p> */}
// // //       {/* {movieresponce && movieresponce.search.map((mv) => <p>{mv.tittle}</p>)} */}
// // //       movie list
// // //     </div>
// // //   );
// // // }

// // // export default Movielist;

// // import React from "react";
// // import Moviecard from "../Moviecard";

// // function Movielist({ data }) {
// //     const{movieAPiResponse,iserror,error}=data

// //     if(iserror){return <h1>{error}</h1>}
// //   console.log(movieAPiResponse);
// //   if(movieAPiResponse&& movieAPiResponse.Response==='False'){return <h1>{movieAPiResponse.Error|| 'something went wrong'}</h1>}
  
// //   return <div>
// //     {movieAPiResponse.Search.map(mv=>(<Moviecard key={mv.Title} {...mv}/>))}
// //   </div>;
// // }

// // export default Movielist;






// import React from 'react'
// import { Apikey, apikey } from "../constants";
// import axios from "axios";
// import { useLoaderData } from 'react-router-dom';



// export async function loader({ params }) {
//   const url = params.imdbId;
// try {
//     const endpoint = `https://www.omdbapi.com/?i=${url}8&apikey=${Apikey}&plot=full`;
//   const response = await axios.get(endpoint);
//   console.log(response.data);
//   return {movie:response.data,iserror:false,error:''};
// }
//  catch (error) {
//   const msg=error?.response?.data?.Error||error.message
//   return {movie:null,iserror:true,error:msg}
// }
// }
// function Movielist() {
//   const {movie,iserror,error}=useLoaderData()
//   if(iserror){return<h1>error</h1>}
//   if(movie&&movie.Response==='False'){return <h1>{movie.Error}</h1>}
 
//   return (
//     <div>
//          <h3>Title:{movie.Title}</h3>
//        <h3> Released:{movie.Released}</h3>
//        <h3> Runtime:{movie.Runtime}</h3>
//        <h3>Actors:{movie.Actors}</h3>
//        <h3>BoxOffice:{movie.BoxOffice}</h3>
//        <h3>Director:{movie.Director}</h3>
//        <h3>Plot:{movie.Plot}</h3>
//        <h3>Released:{movie.Released}</h3>
//        <h3>Year:{movie.Year}</h3>
//        <h3> Awards:{movie.Awards}</h3>

//     </div>
//   )
// }

// export default Movielist







import React from 'react'
import Moviecard from '../Moviecard'

function Movielist({data}) {
  


  const {movieresponse,error,iserror}=data
  console.log(movieresponse)
1



  if(iserror){return <h1>{error}</h1>}

  if(movieresponse&& movieresponse.Response==='False'){return <h1>{movieresponse.Error||'ro result'}</h1>}

  return (


    // <div>
    //   {/* {movieresponse.search.map(movie=><Moviecard key={movie.imdbID} {...movie}/>)} */}
    // </div>
    <div >
      {movieresponse.Search.map(movie=>( <Moviecard key={movie.imdbID} {...movie}/>
      // <p>{movie.Title}</p>
    ))}</div>
  )
}

export default Movielist