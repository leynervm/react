import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import Nav from './components/Nav.jsx'
import List from './List.jsx'
import NotFound from './components/NotFound.jsx'
import ListaAprendizaje from './pages/aprendizaje/ListaAprendizaje.jsx'
import MyFirstPage from './pages/aprendizaje/MyFirstPage.jsx'
import Home from './components/Home.jsx'
import OrderDetails from './pages/aprendizaje/OrderDetails.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/aprendizaje" element={<ListaAprendizaje />}>
            <Route path="/aprendizaje/mi-primer-proyecto" element={<MyFirstPage />} />
            <Route path="/aprendizaje/card-seguidores-instagram" element={<List />} />

            <Route path="/aprendizaje/orders/:orderId" element={<OrderDetails />} />


          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
