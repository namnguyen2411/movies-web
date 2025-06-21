import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
