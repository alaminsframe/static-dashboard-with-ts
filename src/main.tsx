import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Dashboard from './pages/Dashboard.tsx';
import Layout from './components/Layout.tsx';
import Categories from './pages/Categories.tsx';
import Products from './pages/Products.tsx';
import Orders from './pages/Orders.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Dashboard/>} />

            <Route path='categories' element={<Categories/> } />

            <Route path='products' element={<Products/>} />

            <Route path='orders' element={<Orders/>} />

            <Route path='customers' element={
              <div className='p-5 text-3xl'>
                <h1>Customers</h1>
              </div>
            } />

            <Route path='deliveries' element={
              <div className='p-5 text-3xl'>
                <h1>Deliveries</h1>
              </div>
            } />

          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
