import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const watches = [
    {
      id: 1, name: 'Apple Watch', price: 300
    },
    { id: 2, name: 'Mi Band-4', price: 150 },
    { id: 4, name: 'samsung Smart Watch', price: 250 },
    { id: 5, name: 'Google Smart Watch', price: 200 },
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        // used loop
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
