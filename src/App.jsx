import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Auth from "./pages/auth/Auth"
import Admin from "./pages/admin/Admin"

// Components
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Backtop from "./components/backtop/Backtop"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Backtop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
