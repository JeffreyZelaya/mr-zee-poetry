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
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/3%20Heads.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Blister%20Sister.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Charrred.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Dr%20Z.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Father%E2%80%99s%20Stew.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Flushed%20King.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Kimchi.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/King%20Zaiah.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/Soft%20&%20Cuddly%20.jpg?raw=true",
  "https://github.com/JeffreyZelaya/mr-zee-poetry/blob/master/poetry/What%20I%20do.jpg?raw=true",
];

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <h1>Read Mr. Zee's Poetry</h1>
      <div className="home-content-background">
        <div className="book-wrapper">
          <Turn options={options} className="book">
            {pages.map((page, index) => (
              <div key={index} className="page">
                <img src={page} alt="" />
              </div>
            ))}
          </Turn>
        </div>
      </div>
    </div>
  );
};

export default Home

