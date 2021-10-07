import React from 'react'
import Logo from '../dLogo/logo'
import Navbar from '../Navbar/Navbar'
function Home() {
    return (
        <div id="home-page">
            <Navbar />
            <div className="home-page-content">
                <Logo lsize="2.2rem" show="true"/>
                <h1>Join The World's <br />  Biggest Startup Community</h1>
                <h3>Experience the startup ecosystem invest in startups,<br /> research the fastest growing companies, and find a job you love. lorem</h3>
            </div>
        </div>
    )
}
export default Home;