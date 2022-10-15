import { Tab } from 'bootstrap'
import { useState, useEffect } from 'react'
import ListContents from './components/ListContents'
import Tabs from './components/Tabs'

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"
  const [acitveTab, setActiveTab] = useState("posts")
  const [request, setRequest] = useState([])
  const [fetchErr, setFetchErr] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState("")

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

  return (
    <>
      <Tabs onSetActiveTab={setActiveTab} onSetLoading={setIsLoading} />
      {!isLoading ?
        <div>
          {!fetchErr ?
            <ListContents request={request} /> :
            <p className="info">{err}</p>}
        </div> :
        <p className="info">Loading...</p>}
    </>
  )
}

export default App
