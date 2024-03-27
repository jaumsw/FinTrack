import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "@/shared/contexts/AuthContext"
import Home from "@pages/home/Home.tsx"
import Login from "@pages/login/Login"
import Register from "@/pages/register/Register"
import PrivateRoutes from "@/shared/components/PrivateRoutes"
import Painel from "@/pages/painel/Painel"
import SobreIob from './pages/sobre-iob/SobreIOB';

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
          <Route element={<PrivateRoutes/>}>
            <Route path="/painel" element={<Painel />}/>
            <Route path="/dados-iob" element={<SobreIob />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
