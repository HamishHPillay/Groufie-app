import React, { useState } from 'react'

export default function Create(){
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [code, setCode] = useState('')

  async function handleCreate(e){
    e.preventDefault()
    // TODO: call your API to create event and get event code
    const newCode = Math.random().toString(36).slice(2,8).toUpperCase()
    setCode(newCode)
  }

  return (
    <div>
      <h2>Create an event</h2>
      <form onSubmit={handleCreate} className="grid">
        <input placeholder="Event name" value={name} onChange={e=>setName(e.target.value)} />
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
        <button className="btn" type="submit">Create</button>
      </form>
      {code && <p>Your event code: <strong>{code}</strong></p>}
    </div>
  )
}
