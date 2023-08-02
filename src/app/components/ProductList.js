import React from "react";
import { TARGET_DOT_COM_BASE_URL } from "../utils/api";

function ProductList({ products }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 bg-slate-50 rounded-sm">
        {products?.slice(0, 9)?.map((product,index) => (
          <div key={index} className="border p-4 product">
            <a
              href={`${TARGET_DOT_COM_BASE_URL}${product.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2">
              <img
                src={product.imageLink}
                alt={product.title}
                className="mx-auto w-32 h-32 object-contain"
              />
            </a>
            <a
              href={`${TARGET_DOT_COM_BASE_URL}${product.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold text-justify">
              <span> {product.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
