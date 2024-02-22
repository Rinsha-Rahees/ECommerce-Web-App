import React from "react";

function Categories({ items }) {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <a key={`${idx}_category`} href={item.href}>
            <li className="px-10 hover:text-gray-500 duration-200">{item.itemName}</li>
          </a>
        );
      })}
    </>
  );
}
export default Categories;
