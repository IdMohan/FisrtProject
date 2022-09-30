import React from "react";

function Button({ children }) {
  return (
    <>
      <button name="btnOne" type="button" className="text-xl py-2 px-3 hover:translate-y-4 transition duration-700 ease-in-out bg-gray-200 hover:bg-logo-second">
        {children}
      </button>
      {/* <button name="btnOne" type="button" className="relative left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all">
        {children}
      </button> */}



    </>
  )
}

export default Button;