import React from 'react'
import "./home.css"
import Footer from '../footer/Footer'
const Home = () => {
  return (
    <>
    <main className='main_home_page'>
      <div className="main_home_left_side">
      <section class="section">
        <div class="content">
            <h2>Automatic Certificate Generator</h2>
            <p>With QR Code</p>
        </div>
        <button class="button">Generate Certificate</button>
    </section>

      </div>
      <div className="main_home_right_side">
      
      </div>
      
    
    </main>
     <Footer/>
    </>
  )
}

export default Home