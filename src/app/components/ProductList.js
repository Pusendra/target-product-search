import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 bg-slate-50 rounded-sm">
        {products?.slice(0, 9)?.map((product) => (
          <div key={product.tcin} className="border p-4">
            <a
              href={`https://www.target.com${product.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <img
                src={product.imageLink}
                alt={product.title}
                className="mx-auto w-32 h-32 object-contain"
              />
            </a>
            <a
              href={`https://www.target.com${product.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold text-justify"
            >
              <span> {product.title}</span>
             
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



export default ProductList;
