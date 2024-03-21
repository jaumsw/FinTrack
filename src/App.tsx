import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@pages/home/Home.tsx"
import Login from "@pages/login/Login"
import Register from "@/pages/register/Register"
import { AuthProvider } from "@/shared/contexts/AuthContext"

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes Opens */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Routes Closes */}
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
