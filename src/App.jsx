import { useState, useEffect } from 'react'
import ListContents from './components/ListContents'
import Tabs from './components/Tabs'
import Toggle from './components/Toggle'
import TableContents from './components/TableContents'

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"
  const [acitveTab, setActiveTab] = useState("users")
  const [fetchErr, setFetchErr] = useState(true)
  const [request, setRequest] = useState(!fetchErr && [])
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState("")
  const [toggleContents, setToggleCOntents] = useState(true);

  useEffect(() => {
    const apiRequest = async type => {
      try {
        const res = await fetch(`${API_URL}/${type}`)
        const data = await res.json()
        setFetchErr(false)
        return data
      } catch (err) {
        err.message = 'Please, reload the page.'
        setFetchErr(true)
        setErr(err.message)
      }
    }

    const handleRequest = async type => {
      const fetchRequest = await apiRequest(type)
      setIsLoading(false)
      setRequest(fetchRequest)
    }
    setTimeout(() => {
      handleRequest(acitveTab)
    }, 1000)
  }, [acitveTab])

  const handleToggle = () => {
    setToggleCOntents(!toggleContents)
  }

  return (
    <>
      <Toggle handleToggle={handleToggle} />
      <Tabs onSetActiveTab={setActiveTab} onSetLoading={setIsLoading} />
      {!isLoading ?
        <div>
          {!fetchErr ?
            <div>{toggleContents ? <ListContents request={request} /> : <TableContents />}</div> :
            <p className="info">{err}</p>}
        </div> :
        <p className="info">Loading...</p>}
    </>
  )
}

export default App
