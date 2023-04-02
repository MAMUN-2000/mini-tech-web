import React from "react";

function Error({ msg }) {
  return (
    <div className="text-7xl text-red-700 uppercase  text-center block bg-slate-500">
      {msg}
    </div>
  );
}

export default Error;
