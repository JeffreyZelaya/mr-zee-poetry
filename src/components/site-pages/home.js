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
 



import React from "react";
import $ from "jquery";
import "turn.js";


import Turn from "./turn";

const options = {
  width: 900,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [


  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/magazine/pages/01.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/magazine/pages/02.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/magazine/pages/03.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/magazine/pages/04.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/magazine/pages/05.jpg?raw=true",


];

const Home = () => {
  return (
    <Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          <img src={page} alt="" />
        </div>
      ))}
    </Turn>
  );
};

export default Home

