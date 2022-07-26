import React from 'react'
import PerfilCard from '../../components/PerfilCard/PerfilCard'
import UserTable from '../../components/UserTable/UserTable'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useLocation } from 'react-router-dom'

//estilos
import './HomeUser.css'

const HomeUser = () => {
  const { state } = useLocation();
  return (
    <div className='container-fluid  p-0'>
        <Navbar></Navbar>
        <div className='img-banner-admin p-0'>
          <img
              src="https://www.journeygazer.com/wp-content/uploads/2019/03/Moraine-lake-destination.jpg"/>
        </div>
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-xxl-8 col-12 col-table d-flex justify-content-center order-2 order-xxl-1'>
            <div>
              <div className='table_background-admin shadow'>
                <div className='container-fluid p-0 '>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-12 table-container order-5'>
                      <UserTable></UserTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-4 col-12 col-profile order-1 order-xxl-2'>
            <div className='d-flex justify-content-center'>
              <PerfilCard cargo={state.name}></PerfilCard>
            </div>
            <div className='buttons-colection'>
              <div className='row'>
                <div className='col-lg-12 col-6 d-flex justify-content-center buttons-colection-item'>
                  <Link to="/addUser">
                    <button type="button" class="btn btn-admin-profile">Add User</button>
                  </Link>
                </div>  
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default HomeUser