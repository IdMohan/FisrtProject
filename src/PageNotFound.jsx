import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <div className="p-6 m-auto w-[50%] h-fit">
        <span>
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
            alt="page-not-found"
            className="shadow-xl shadow-black"
          />
        </span>
      </div>
    </>
  );
}
export default PageNotFound;
