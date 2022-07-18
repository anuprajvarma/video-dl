import React, { useState } from 'react'
import Particle from './particle'
import Footer from './footer'
import './nav.css'

const Home = () => {
    const [VideoUrl, setUrl] = useState('');
    const [id, setId] = useState('');

    const URL = (e) => {
        setUrl(e.target.value);
        console.log(VideoUrl)
    }


    return (
        <div className='home-div'>
            <div className='Box'>
                <div>
                    <div className='search-box'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className='input-box' type='text' onChange={URL} placeholder='Paste Youtube Video Url'></input>
                        </form>
                    </div>
                </div>

            </div>
            <Particle className='particle' />
            <Footer />
        </div>
    )
}

export default Home
