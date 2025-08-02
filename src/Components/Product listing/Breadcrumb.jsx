import React from 'react';

export default function Breadcrumb({ product }) {
  if (!product) return null;

  const items = [
    { label: 'Home', value: true },
    { label: product.category, value: product.category },
    { label: product.productType, value: product.productType },
    { label: product.name, value: product.name }
  ];

  return (
    <div className="flex items-center h-12 text-gray-500 text-sm">
      <p>
        {items.map((item, index) => (
          item.value && (
            <span key={index}>
              {item.label}
              {/* Only show " > " if there's another valid item after this one */}
              {items.slice(index + 1).some(next => next.value) && ' > '}
            </span>
          )
        ))}
      </p>
    </div>
  );
}
