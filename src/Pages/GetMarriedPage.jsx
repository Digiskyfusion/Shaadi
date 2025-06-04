import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import GetMarriedOne from '../Component/GetMarriedPage/GetMarriedOne';
import Footer from '../Component/FooterPage/Footer';
import Navbar4 from '../Component/Navbar/Navbar4';

function GetMarriedPage() {
  const [tokenAvailable, setTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenAvailable(true);
    }
  }, []);

  return (
    <>
      {tokenAvailable ? <Navbar4 /> : <Navbar />}

      <div className={tokenAvailable ? '' : 'mt-25'}>
        <GetMarriedOne />
      </div>

      <Footer />
    </>
  );
}

export default GetMarriedPage;
