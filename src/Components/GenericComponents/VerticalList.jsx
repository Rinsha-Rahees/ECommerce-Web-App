import React from "react";

function VerticalList({ children, list }) {
 
  return (
    <>
      <h2 className="font-semibold text-xl">{children}</h2>
      <span className="flex flex-col font-sans text-sm leading-8">
       {list.map((item, idx) => {
              return (
                <a 
                className="hover:text-emerald-700 duration-200"
                key={`${idx}_${item?.itemName}`} 
                href={item?.href}
                >
                  {item?.itemName}
                </a>
              );
            })
         }
      </span>
    </>
  );
}

export default VerticalList;
