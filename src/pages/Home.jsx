import React from 'react'

import logo from '../asstes/tuit.jpg';

const Home = () => {
  return (
      <div className='app'>
        <div className="home-container">
            <div className='logo-wrap'>
            <img width={200} src={logo} alt="" />
            </div>
            <br />
            <h1>Muhammed al-Xorezmiy atındaǵı  Tashkent informacıyalıq texnologiyaları universiteti Nókis filialı.</h1>
            <h4>Fizika I kursı boyinsha prezentaciya multimedia elektron oqıw qollanbası</h4>
            <h6>Tábiyiy hám anıq pánleri kafedrası</h6>
            <span><b>Dúziwshi</b>: <span className='underline'>ass. S.G. Kaypnazarov</span></span>
        </div>
    </div>
  )
}

export default Home