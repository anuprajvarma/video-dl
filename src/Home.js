import React, { useEffect, useState } from 'react'
import Particle from './particle'
import Footer from './footer'
import DownloadButtonDefault from './DownloadButtonDefault'
import DownloadButtonInvailid from './DownloadButtonInvailid'
import DownloadButton from './DownloadButton'
import './nav.css'

const Home = () => {
    const [VideoUrl, setUrl] = useState('');
    const [id, setId] = useState('');

    const URL = (e) => {
        setUrl(e.target.value);
        //console.log(VideoUrl)
    }

    useEffect(() => {
        const id = VideoUrl.replace("https://www.youtube.com/watch?v=", "");
        setId(id);
    }, [VideoUrl])


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

                {
                    VideoUrl === '' ? (<DownloadButtonDefault />) : (
                        <div>
                            {
                                VideoUrl.startsWith("https://www.youtube.com/watch?v=") ||
                                    VideoUrl.startsWith("https://youtube.com/watch?v=") ||
                                    VideoUrl.startsWith("www.youtube.com/watch?v=") ||
                                    VideoUrl.startsWith("youtube.com/watch?v=") ||
                                    VideoUrl.startsWith("https://youtu.be/") ||
                                    VideoUrl.startsWith("https://youtube.com/shorts/") ||
                                    VideoUrl.startsWith("https://m.youtube.com/watch?v=") ||
                                    VideoUrl.startsWith("v=") ? (
                                    <div>
                                        <DownloadButton id={id} type="mp3" />
                                        <br />
                                        <DownloadButton id={id} type="videos" />
                                    </div>
                                ) : (<DownloadButtonInvailid />)
                            }
                        </div>
                    )
                }

            </div>
            <Particle className='particle' />
            <Footer />
        </div>
    )
}

export default Home
