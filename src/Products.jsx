import React from 'react';

function Products({ a, b }) {
  return (
    <div className="flex justify-center items-center h-13">
      <button 
        className="bg-blue-950 text-white hover:bg-amber-50 hover:text-black font-light py-2 px-4 text-center rounded transition text-xl">
            Enter
      </button>
    </div>
  );
}

export default Products;
