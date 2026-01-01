import { useEffect, useState } from 'react'
// import useCount from './useCount'

function App() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState('stop')

  useEffect(()=>{
     if(status === 'stop'){return}
     const set =  setInterval(() => {
       setCount(prev=>prev+1)
      }, 1000);
      return ()=>{clearInterval(set)}
    },[status])

  function start(){
    setStatus('running')
  }
  function stop(){
    setStatus('stop')
  }

  return (
  <div className='min-h-screen w-full bg-black text-white'>
    <div className='p-20 text-5xl'>
      <div>{count}</div>
      <div>{status}</div>
      <button onClick={start}>Start Timer</button>
      <button onClick={stop}>Stop Timer</button>
    </div>
  </div>
  )
}

export default App
