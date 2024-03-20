import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@pages/home/Home.tsx"
import Login from "@pages/login/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Opens */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Routes Closes */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
