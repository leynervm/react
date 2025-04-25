import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import Nav from './components/Nav.jsx'
import NotFound from './components/NotFound.jsx'
import { FiltersProvider } from './context/filters.jsx'

const ListSeguidores = lazy(() => import('./ListSeguidores.jsx'))
const ListaAprendizaje = lazy(() => import('./pages/aprendizaje/ListaAprendizaje.jsx'))
const DinamicRoute = lazy(() => import('./pages/aprendizaje/DinamicRoute.jsx'))
const Home = lazy(() => import('./components/Home.jsx'))
const OrderDetails = lazy(() => import('./pages/aprendizaje/OrderDetails.jsx'))
const Search = lazy(() => import('./components/Search.jsx'))
const Counter = lazy(() => import('./pages/aprendizaje/Counter.jsx'))
const GridExpertApp = lazy(() => import('./pages/aprendizaje/GridExpertApp.jsx'))
const AppCarshoop = lazy(() => import('./pages/aprendizaje/shopping-cart/AppCarshoop.jsx'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="aprendizaje" element={<ListaAprendizaje />}>
            <Route path="orders" element={<DinamicRoute />} />
            <Route path="search-form" element={
              <Suspense fallback={<div>Loading...</div>}>
                <Search />
              </Suspense>} />
            <Route path="card-seguidores-instagram" element={<ListSeguidores />} />
            <Route path="counter" element={<Counter start={1} end={5} />} />

            <Route path="orders/:orderId" element={<OrderDetails />} />
            <Route path="gift-expert-app" element={<GridExpertApp />} />
            <Route path="shopping-cart" element={
              <FiltersProvider>
                <AppCarshoop />
              </FiltersProvider>
            } />


          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
