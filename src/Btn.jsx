import React from 'react';

function Btn({ children }) {
  return (<>
    <button type="button" name="btnTwo"
      className="py-2 px-3 hover:translate-y-6 transition duration-700 ease-in-out bg-gray-200 hover:bg-tomato-light-2 text-xl">
      {children}
    </button>
  </>
  )
}

export default Btn;