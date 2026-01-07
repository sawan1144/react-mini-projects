import React, { useState } from 'react'

const Form = ({onGenerate}) => {
  const [namee, setNamee] = useState('')
  const [bio, setBio] = useState('')
  const [img, setImg] = useState('')
  const [tech, setTech] = useState('')


  return (
    <div>
      <form onSubmit={(e)=>{onGenerate({namee, bio, img, tech}); setBio(''); setImg(''); setNamee(''); setTech(''); e.preventDefault()}} 
      className='bg-black py-5 px-10 w-[35vw] space-y-2 rounded-lg'>

        <div className='flex gap-3 w-full'>
          <label className='w-22 text-right'>Name :</label>
          <input type="text" placeholder='Enter your name here'
          className='bg-gray-500 px-2 rounded-md flex-1'
          value={namee} onChange={(e)=>setNamee(e.target.value)}/>
        </div>

        <div className='flex gap-3 w-full'>
          <label className='w-22 text-right'>Bio :</label>
          <textarea type="text" placeholder='Enter your bio here' rows={4} cols={30}
          className='bg-gray-500 flex-1 rounded-md px-2 overflow-hidden leading-tight'
          value={bio} onChange={(e)=>setBio(e.target.value)}/>
        </div>

        <div className='flex gap-3 w-full'>
          <label className='w-22 text-right'>Image :</label>
          <input type="text" placeholder='Enter your img here'
          className='bg-gray-500 flex-1 rounded-md px-2'
          value={img} onChange={(e)=>setImg(e.target.value)}/>
        </div>

        <div className='flex gap-3 w-full'>
          <label className='w-22 text-right'>Tech Stack :</label>
          <input type="text" placeholder='Enter your img here'
          className='bg-gray-500 flex-1 rounded-md px-2'
          value={tech} onChange={(e)=>setTech(e.target.value)}/>
        </div>
        <button className='bg-gray-600 py-2 px-3 rounded-lg font-semibold mt-4 mx-auto block' type='submit'>Generate</button>
      </form>
    </div>
  )
}

export default Form