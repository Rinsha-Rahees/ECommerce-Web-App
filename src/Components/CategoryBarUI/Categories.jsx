import React from 'react'

function Categories({ itemDetails }) {
    return (
      <a href={itemDetails.href}>
        <li className="px-10 hover:text-rose-600">{itemDetails.itemName}</li>
      </a>
    );
  }

export default Categories