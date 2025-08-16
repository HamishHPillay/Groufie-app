import React, { useState } from 'react'

export default function Join(){
  const [code, setCode] = useState('')

  function handleJoin(e){
    e.preventDefault()
    window.location.href = `/events/${code}` // app-level route; can be handled in the future
  }

  return (
    <div>
      <h2>Join an event</h2>
      <form onSubmit={handleJoin} className="grid">
        <input placeholder="Enter code" value={code} onChange={e=>setCode(e.target.value.toUpperCase())} />
        <button className="btn" type="submit">Open gallery</button>
      </form>
    </div>
  )
}
