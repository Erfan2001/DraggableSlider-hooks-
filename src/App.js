import "./App.css";
import React, { useState, useRef, useEffect } from "react";
function App() {
  const [margin, setMargin] = useState();
  const [move, setMove] = useState(false);

  let innerRef = useRef();

  useEffect(() => {
    innerRef.current.style.marginLeft = margin;
  }, [margin]);

  const mouseDown = (e) => {
    setMove(true);
  };

  useEffect(()=>{
    window.addEventListener("mouseup",()=>{
      setMove(false)
    })
  })

  const test=()=>{
    if((window.event.screenX >500) && (window.event.screenX <900) && move){
    setMargin(window.event.screenX - 500 + "px");
    }
  }
  useEffect(()=>{
      window.addEventListener("mousemove",test) 
      return ()=>{
        window.removeEventListener("mousemove",test) 
      }
  },[move])
  return (
    <div className="App">
      <div className="test"></div>
      <div className="Out" >
        <div
          className="In"
          onMouseDown={mouseDown}
          // onMouseUp={mouseup}
          ref={innerRef}
          style={{ marginLeft: "0px" }}
        ></div>
      </div>
    </div>
  );
}
export default App;























// import "./App.css";
// import React, { useState, useRef, useEffect } from "react";
// function App() {
//   const [margin, setMargin] = useState();
//   const [move, setMove] = useState(false);
//   let innerRef = useRef();
//   useEffect(() => {
//     innerRef.current.style.marginLeft = margin;
//   }, [margin]);
//   const mouseDown = (e) => {
//     setMove(true);
//   };
//   useEffect(()=>{
//     const x=window.addEventListener("mousemove",()=>{
//       if (window.event.screenY < 500 || window.event.screenY > 520 || window.event.screenX<500 || window.event.screenX >1000) {
//         setMove(false);
//       }
//     })
//     return ()=>{
//       window.removeEventListener("mousemove",x)
//     }
//   },[])
//   const moved = () => {
//     if (
//       (Number(innerRef.current.style.marginLeft.slice(0, -2)) < 400 ||
//         window.event.screenX < 900) &&
//       move
//     ) {
//       setMargin(window.event.screenX - 500 + "px");
//     }
//     console.log(window.event.screenX)
//   };
//   const mouseUp = () => {
//     setMove(false);
//   };
//   return (
//     <div className="App">
//       <div className="test"></div>
//       <div className="Out" onMouseMove={moved}>
//         <div
//           className="In"
//           onMouseDown={mouseDown}
//           onMouseUp={mouseUp}
//           ref={innerRef}
//           style={{ marginLeft: "0px" }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default App;

