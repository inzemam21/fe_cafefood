import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import './Layout.css'

const Layout = () => {

    const renderLayOut = () => (
        <div className='layout'>
         <Navbar />
         <Main />
         <Footer />
        </div>
    )

  return (
      <>
      {renderLayOut()}
      </>
  )
};

export default Layout;
