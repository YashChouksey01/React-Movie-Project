// // // import React from "react";
// // // import { Link, Outlet, useNavigation } from "react-router-dom";

// // // function Root() {
// // //   const Nevigation = useNavigation();
// // //   return (
// // //     <nav>
// // //       <Link to="/">
// // //         <div >
// // //           <h1>Moviesearch</h1>
// // //         </div>
// // //       </Link>

// // //       {Nevigation.state === "loading" ? <h1>...Loading</h1> : <Outlet />}
// // //     </nav>
// // //   );
// // // }

// // // export default Root;



// // import React from 'react'
// // import { Link, Outlet,useNavigation } from 'react-router-dom'




// // function Root() {
// //     const neg=useNavigation()
// //   return (
// //     <nav>
// //         <Link><h1>movie Arina</h1></Link>
// //         { neg.state==='loading'? <h1>...Loading</h1>:<Outlet/>}
// //     </nav>
// //   )
// // }

// // export default Root


// import React from 'react'
// import { Outlet } from 'react-router-dom'

// function Root() {
//   return (
//     <div>
//       <h1>MOVIE Arina</h1>
//       <Outlet/>
//     </div>
//   )
// }

// export default Root





import React from 'react'
import {Link, Outlet,useNavigation} from 'react-router-dom'


function Root() {
  const navigate=useNavigation()
  console.log(navigate.state)
  return (
    <div>
      <Link to='/' ><h1>movie Arina</h1></Link>
     {navigate.state==='loading'? <h1>loading...</h1>: <Outlet/>} 
    </div>
  )
}

export default Root