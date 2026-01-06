import React, { useState } from 'react'

const Form = ({onGenerate}) => {
  const [namee, setNamee] = useState('')
  const [bio, setBio] = useState('')
  const [img, setImg] = useState('')
  const [tech, setTech] = useState('')

  


  return (
    <div>
      <form onSubmit={(e)=>{onGenerate({namee, bio, img, tech}); e.preventDefault()}} className='bg-black p-10'>
        <div>
          <label>Name:</label>
          <input type="text" placeholder='Enter your name here'
          value={namee} onChange={(e)=>setNamee(e.target.value)}/>
        </div>
        <div>
          <label>Bio:</label>
          <textarea type="text" placeholder='Enter your bio here' rows={3} cols={30}
          value={bio} onChange={(e)=>setBio(e.target.value)}/>
        </div>
        <div>
          <label>Image:</label>
          <input type="text" placeholder='Enter your img here'
          value={img} onChange={(e)=>setImg(e.target.value)}/>
        </div>
        <div>
          <label>Tech Stack:</label>
          <input type="text" placeholder='Enter your img here'
          value={tech} onChange={(e)=>setTech(e.target.value)}/>
        </div>
        <button type='submit'>Generate</button>
      </form>
    </div>
  )
}

export default Form