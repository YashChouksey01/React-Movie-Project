// // // import React from "react";
// // // import { Form } from "react-router-dom";

// // // function Searchform({ searchparams }) {
// // //   return (
// // //     <div >
// // //       <Form method="GET">
// // //         <input type="text" name="search" required defaultValue={searchparams} />
// // //         <button type="submit">search</button>
// // //       </Form>
// // //     </div>
// // //   );
// // // }

// // // export default Searchform;

// // import React from "react";
// // import { Form } from "react-router-dom";

// // function Searchform({ searchterm }) {
// //   return (
// //     <div>
// //       <Form>
// //         <input type="text" name="search" required defaultValue={searchterm} />
// //         <button type="submit">submit</button>
// //       </Form>
// //     </div>
// //   );
// // }

// // export default Searchform;

// import React from 'react'
// import { Form } from 'react-router-dom'


// function Searchform({search}) {
//   return (
//     <div>
//       <Form>
//         <input type="text" name='search' required  defaultValue={search}/>
//         <button type='submit'> search </button>
//       </Form>
//     </div>
//   )
// }

// export default Searchform



import React from 'react'
import { Form } from 'react-router-dom'

function Searchform({search}) {
  return (
    <Form>
      <input type="text" name="title" id="search" required defaultValue={search} />
      <button type='submit'>search</button>
    </Form>
  )
}

export default Searchform