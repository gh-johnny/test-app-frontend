import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()

  const fetchData = useCallback(async () => {
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Teste Baraúna</h1>
      <p className="read-the-docs">
        Os dados deverão ser exibidos aqui
      </p>
      <div className="card">
       {/* Listar dados aqui */}
        <ul>
        </ul>
      </div>
    </>
  )
}

export default App
