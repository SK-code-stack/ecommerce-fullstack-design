import React from 'react';

export default function Breadcrumb({ category, product }) {
  return (
    <div className="flex items-center h-12 text-gray-500">
      <p>
        Home
        {category && <span> <span className="mx-1">&gt;</span> {category}</span>}
        {product && <span> <span className="mx-1">&gt;</span> {product}</span>}
      </p>
    </div>
  );
}
