import React, { useEffect, useState } from 'react'

const useCount = (count) => {
    const [number, setNumber] = useState(0)

    useEffect(()=>{
        setInterva(() => {
            setNumber(prev=>prev+1)
        }, 1000);
    },[number])

  return (
    {number}
  )
}

export default useCount

