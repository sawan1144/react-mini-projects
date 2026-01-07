import { useState } from 'react'
import Form from './Form'
import Card from './Card'

function App() {
  const [list, setList] = useState([])

  function handleGenerate(e){
    const card = {
      name: e.namee,
      bio: e.bio,
      img: e.img,
      tech: e.tech,
      id: Date.now(),
    }
    setList((prev)=>[...prev, card])
  }

  return (
    <div className='h-screen flex flex-col gap-10 pt-10 pb-5 items-center bg-gray-500 '>
      <div className='flex flex-col items-center gap-2'>
        <div className='text-black text-3xl font-semibold underline'>Profile Card Generator</div>
        <Form onGenerate={handleGenerate}/>
      </div>
      <div className='space-y-10 overflow-y-scroll py-2 px-5 hide-scrollbar'>
        {list.map((e)=> <Card id={e.id} namee={e.name} bio={e.bio} img={e.img} tech={e.tech}/>)}
      </div>
    </div>
  )
}

export default App
