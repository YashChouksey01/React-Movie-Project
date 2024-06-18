// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // import Home from "./Home"
// // import Root from "./Root"
// // import Onemovie, { Loader2  } from "./Onemovie"
// // import { Apikey } from "./constants"
// // import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
// // import Error from "./Error"
// // import { Loader as Movieloader } from "./Home"

// // const router=createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<Root/>} >
// //       <Route index element={<Home/>} loader={Movieloader}/>
// //       <Route path="/detail/:imdbId" element={<Onemovie/>} loader={Loader2}/>

// //     </Route>
// //   )
// // )

// // function App() {
// // return <RouterProvider router={router}/>
// // }

// // export default App

// // import {
// //   createBrowserRouter,
// //   createRoutesFromElements,
// //   Route,
// //   RouterProvider,
// // } from "react-router-dom";
// // import Home, { Loader }  from "./Home";
// // import Onemovie from "./Onemovie";
// // import Root from "./Root";
// // import { loader2  as Mvl} from "./Onemovie";
// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<Root />}>
// //       <Route index element={<Home />} loader={Loader} />
// //       <Route path="/detail/:imdbId" loader={Mvl} element={<Onemovie />} />
// //     </Route>
// //   )
// // );

// // function App() {
// //   return <RouterProvider router={router} />;
// // }
// // export default App;

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./Home";
// import Onemovie from "./Onemovie";
// import Root from "./Root";
// import { loader as ML } from "./Home";
// import { loader as ML2 } from "./component/Movielist";
// import Movielist from "./component/Movielist";
// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />}  loader={ML}/>
//       <Route path="detail/:imdbid" element={<Movielist/>} loader={ML2} />
//     </Route>  
//    )
// );
// function App() {
//   return <RouterProvider router={router} />;
// }
// export default App;






import {useNavigation} from 'react-router-dom'

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom";
import Root from "./Root";
import Home, { loader as Movieloader } from "./Home";
import Onemovie, { loader2 as singlemovieloader } from "./Onemovie";
import Error from "./Error";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>} loader={Movieloader} />
      <Route path="/detail/:imdbid" element={<Onemovie/>} loader={singlemovieloader}/>
   
    </Route>
  )
)


function App2(){

  
 

  return <RouterProvider router={router}/>
  
}

export default App2






















































// // const [count, setCount] = useState(0)
// // <>
// //<div>
// //      <a href="https://vitejs.dev" target="_blank">
// //         <img src={viteLogo} className="logo" alt="Vite logo" />
// //       </a>
// //       <a href="https://react.dev" target="_blank">
// //         <img src={reactLogo} className="logo react" alt="React logo" />
// //       </a>
// //     </div>
// //     <h1>Vite + React</h1>
// //     <div className="card">
// //       <button onClick={() => setCount((count) => count + 1)}>
// //         count is {count}
// //       </button>
// //       <p>
// //         Edit <code>src/App.jsx</code> and save to test HMR
// //       </p>
// //     </div>
// //     <p className="read-the-docs">
// //       Click on the Vite and React logos to learn more
// //     </p>
// //   </>
