import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Room = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const name = searchParams.get('name');
  
  useEffect(()=> {
    // logic to init user to the room
  }, [name])
  
  return (
    <div>
      Hi {name}
    </div>
  )
}

export default Room
