// // import React, { Component } from "react"
// // import $ from "jquery";
// // import "turn.js";

// // export default class Home extends Component {

// //     render(){
// //         return (
// //             <div>
// //                 <div id="flipbook">
// //                     <div class="hard"> Turn.js </div>
// //                     <div class="hard"></div>
// //                     <div> Page 1 </div>
// //                     <div> Page 2 </div>
// //                     <div> Page 3 </div>
// //                     <div> Page 4 </div>
// //                     <div class="hard"></div>
// //                     <div class="hard"></div>
// //                 </div>
// //             <script type="text/javascript">
// //                  {$("#flipbook").turn({
// //                     width: 400,
// //                     height: 300,
// //                     autoCenter: true
// //                 })};
// //             </script>
// //             </div>
// //           );

// //     }
// // }
 



// import React from "react";
// import ReactDOM from "react-dom";
// import $ from "jquery";
// import "turn.js";


// import Turn from "./turn";

// const options = {
//   width: 800,
//   height: 600,
//   autoCenter: true,
//   display: "double",
//   acceleration: true,
//   elevation: 50,
//   gradients: !$.isTouch,
//   when: {
//     turned: function(e, page) {
//       console.log("Current view: ", $(this).turn("view"));
//     }
//   }
// };

// const pages = [
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
//   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
// ];

// const Home = () => {
//   return (
//     <Turn options={options} className="magazine">
//       {pages.map((page, index) => (
//         <div key={index} className="page">
//           <img src={page} alt="" />
//         </div>
//       ))}
//     </Turn>
//   );
// };

// export default Home

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<Home />, rootElement);