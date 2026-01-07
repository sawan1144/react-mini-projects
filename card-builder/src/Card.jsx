import React from 'react'

const Card = ({namee, bio, img, tech, id}) => {
  return (
    <div id={id} className='px-10 py-5 max-w-[25vw] rounded-lg bg-blue-200 flex flex-col gap-2 items-center'>
        <img src={img} className='h-20 w-20 bg-black rounded-full object-cover' />
        <div className='text-xl font-bold text-black'>{namee}</div>
        <div className='font-light text-gray-700 overflow-y-auto flex justify-center'>{bio}</div>
        <div className='text-blue-800'>Tech Stack :</div>
        <div className='text-blue-400'>{tech}</div>
    </div>
  )
}

export default Card