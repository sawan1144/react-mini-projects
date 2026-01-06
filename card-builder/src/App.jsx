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
      tech: e.tech
    }
    setList((prev)=>[...prev, card])
  }

  return (
    <div className='min-h-screen flex flex-col gap-15 pt-20 items-center bg-gray-500'>
      <Form onGenerate={handleGenerate}/>
      {list.map((e)=> <Card namee={e.name} bio={e.bio} img={e.img} tech={e.tech}/>)}
    </div>
  )
}

export default App
