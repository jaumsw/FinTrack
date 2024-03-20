import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@pages/home/Home.tsx"
import Login from "@pages/login/Login"
import Register from "@/pages/register/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Opens */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Routes Closes */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
