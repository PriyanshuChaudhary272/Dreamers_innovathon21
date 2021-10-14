import React from 'react'
import Logo from '../Components/logo'
import More from './More';
function Home() {
    return (
        <>
            <div id="home-page">
                <div className="home-page-content">
                    <Logo src="https://cdn-icons-png.flaticon.com/512/992/992615.png" lsize="2.2rem" show="true" />
                    <h1>Join The World's <br />  Biggest Startup Community</h1>
                    <h3>Experience the startup ecosystem invest in startups,<br /> research the fastest growing companies, and find a job you love. lorem</h3>
                </div>
            </div>
            <More />
        </>
    )
}
export default Home;