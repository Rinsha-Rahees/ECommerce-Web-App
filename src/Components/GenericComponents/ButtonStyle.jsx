import React from 'react'

function ButtonStyle({children}) {
  return (
    <div className="bg-black font-mono font-bold text-white py-2.5 sm:px-10 rounded-lg text-center">
        {children}
    </div>
  )
}

export default ButtonStyle