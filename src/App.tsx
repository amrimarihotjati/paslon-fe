import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Paslon from './pages/Paslon';
import Partai from './pages/Partai';
import Kontak from './pages/Kontak';
import SignUp from './pages/SignUp';
import PrivateRoute from "./hooks/PrivateRoutes";
import { LoginProvider } from "./hooks/LoginContext";


export default function App() {
  return (
    <div>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route index element={<Home />} />
              <Route path='paslon' element={<Paslon />} />
              <Route path='partai' element={<Partai />} />
              <Route path='kontak' element={<Kontak />} />
              <Route path='signup' element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  )
}
