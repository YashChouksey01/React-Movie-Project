// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // function Moviecard({ Title, Year, imdbID, type, Poster }) {
// // //   return (
// // //     <div>
// // //       <div
// // //         style={{
// // //           padding: "3rem",
// // //           margin: "1rem",
// // //           backgroundColor: "lightgrey",
// // //         }}
// // //       >
// // //         <Link to={`/detail/${imdbID}`}>
// // //           <h2>
// // //             {Title}  year:{Year}
// // //           </h2>

// // //           <img src={Poster} alt="" />
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Moviecard;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Moviecard({ Title, year, imdbID, Poster }) {
// //   return (
// //     <div
// //       style={{
// //         padding: "3rem",
// //         margin: "1rem",
// //         backgroundColor: "lightgrey",
// //       }}
// //     >
// //       <Link to={`/detail/${imdbID}`}>
// //         <h3>{Title}</h3>
// //         <img src={Poster} alt="" />
// //       </Link>
// //     </div>
// //   );
// // }

// // export default Moviecard;

// import React from "react";
// import Onemovie from "./Onemovie";

// function Moviecard({ data }) {
//   const { movieApiResponse, iserror, error } = data;
//   if (iserror) {
//     return <h1>{error}</h1>;
//   }
//   if (movieApiResponse && movieApiResponse.Response === "False") {
//     return <h1>{movieApiResponse.Error || "no rsult found"}</h1>;
//   }

//   console.log(movieApiResponse);
//   return (
//     <div>
//       {movieApiResponse.Search.map((mv) => (
//         <Onemovie key={mv.imdbID} {...mv} />
//       ))}
//       {/* {movieApiResponse.Search.map((mv) => (
//         <p>{mv.Title}</p>
//       ))} */}
//     </div>
//   );
// }

// export default Moviecard;

import React from "react";
import { Link } from "react-router-dom";
function Moviecard({ Title, imdbID ,Poster}) {
  return (
    <div
      style={{
        padding: "3rem",
        margin: "1rem",
        backgroundColor: "lightgrey",
        
      }}
    >
      
      <Link to={`detail/${imdbID}`}>
        {" "}<img src={Poster} alt="" />
        <h4 >{Title} </h4>
      </Link>
    </div>
  );
}

export default Moviecard;
