import React from 'react'

import logo from '../asstes/tuit.png';

const Home = () => {
  return (
      <div className='app'>
        <div className="home-container">
            <img width={150} src={logo} alt="" /><br />
            <h1>Muhammed al-Xorezmiy atindag'i Tashkent informaciyaliq texnologiyalari universiteti No'kis filiali.</h1>
            <h4>Fizika I kursi boyinsha prezentaciya multimedia elektron oqiw qollanbasi</h4>
            <h6>Ta'biyiy ha'm aniq pa'nler kafedrasi</h6>
            <span><b>Du'ziwshi</b>: <span className='underline'>ass. S.G. Kaypnazarov</span></span>
        </div>
    </div>
  )
}

export default Home