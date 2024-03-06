import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

function App() {

  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Layout>

  )
}

export default App
