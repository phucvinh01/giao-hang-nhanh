import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/Error'
import Layout from './components/Layout'
import Product from './pages/Product'
import Admin from './pages/Admin'
import ProductAdmin from './pages/Admin/ProductAdmin'
import Order from './pages/Admin/Order'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Route>
        <Route path='/admin' element={ <Admin /> }>
          <Route path='/admin/product' element={ <ProductAdmin /> } />
          <Route path='/admin/order' element={ <Order /> } />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
