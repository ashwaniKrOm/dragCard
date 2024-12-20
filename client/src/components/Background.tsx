import React from 'react'

const Background:React.FC= () => {
  return (
  
    <div className='relative w-full h-screen bg-zinc-900 z-0'>
      <h2 className='absolute text-[5vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold uppercase'>Draggable Card</h2>
    </div>

  )
}

export default Background
