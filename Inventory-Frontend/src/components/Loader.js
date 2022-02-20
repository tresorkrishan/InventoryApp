import { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: green;
//   align-items:"center;
//   display:"flex";
//   justify-content:"center"
// `;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("yellowgreen");

  return (
    // <div className="sweet-loading">
    //   <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    //   <input
    //     value={color}
    //     onChange={(input) => setColor(input.target.value)}
    //     placeholder="Color of the loader"
    //   />
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "100px",
      }}
    >
      <ScaleLoader color={color} loading={loading} height={60} width={4} />
    </div>
  );
}

export default Loader;
