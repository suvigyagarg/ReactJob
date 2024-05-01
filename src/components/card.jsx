import React from 'react'
//can change classes as well using props 
function card({children ,bg = 'bg-gray-100'}) {
  return (
    <div className={ `${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>

  )
}

export default card