import React from 'react'

function ButtonStyle({children}) {
  return (
    <div className="bg-black font-mono text-white py-2.5 px-10 rounded-lg">
        {children}
    </div>
  )
}

export default ButtonStyle