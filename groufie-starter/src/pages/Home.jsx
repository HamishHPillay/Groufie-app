import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <h1>Event photos, made easy</h1>
        <p>Create a private link, share it with guests, and watch your gallery fill up in real-time.</p>
        <Link className="btn" to="/create">Create an event</Link>
      </section>

      <div className="grid">
        <div className="card">
          <h3>Fast mobile uploads</h3>
          <p>Pre-signed S3 uploads direct from your phone. No logins needed for guests.</p>
        </div>
        <div className="card">
          <h3>Privacy-first</h3>
          <p>Private event links with optional passcodes. Delete any photo instantly.</p>
        </div>
        <div className="card">
          <h3>Share or print</h3>
          <p>Choose compression for quick sharing, or keep originals for print.</p>
        </div>
      </div>
    </div>
  )
}
