import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/Error'
import Layout from './components/Layout'
import Product from './pages/Product'
import Admin from './pages/Admin'
import ProductAdmin from './pages/Admin/pages/Product'
import Order from './pages/Admin/pages/Order'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Employess from './pages/Admin/pages/Employess'
import Sales from './pages/Admin/pages/Sales'
import { getProductList } from './redux/api'
import { useDispatch, useSelector } from 'react-redux'
import About from './pages/About'
function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    if (user?.role === 1) {
      navigate('/admin')
    }
  }, [user])

  useEffect(() => {
    getProductList(dispatch)
  }, [dispatch])

  return (
    <>
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
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path='/about' element={ <About /> } />

          <Route path="*" element={ <ErrorPage /> } />
        </Route>
        <Route path='/admin' element={ <Admin /> }>
          <Route path='/admin/product' element={ <ProductAdmin /> } />
          <Route path='/admin/order' element={ <Order /> } />
          <Route path='/admin/employee' element={ <Employess /> } />
          <Route path='/admin/sale' element={ <Sales /> } />
        </Route>
      </Routes>

    </>
  )
}

export default App
