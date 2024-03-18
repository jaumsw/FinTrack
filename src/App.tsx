import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Opens */}
        <Route path="/" element={<Home />} />
        {/* Routes Closes */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
