import React from 'react';
import { SiSpinrilla } from 'react-icons/si';

function Loading() {
  return (
    <>
      <div className="p-6 m-auto w-full h-screen flex justify-center items-center text-center text-logo-second text-5xl">
        <SiSpinrilla className="animate-spin" />
      </div>
    </>
  );
}
export default Loading;
