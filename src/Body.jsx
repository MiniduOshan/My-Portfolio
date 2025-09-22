import React from "react";

function Body(props) {
  return (
    <div className="rounded-2xl shadow-xl p-6 backdrop-blur-md bg-white/10 border border-white/20 text-gray-200">
      {props.children}
    </div>
  );
}

export default Body;
