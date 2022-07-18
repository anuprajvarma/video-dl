import React from 'react'
import './DownloadButton.css'

const DownloadButton = ({ id, type }) => {
    return (
        <div className='download'>
            <h2>Download {type === "mp3" ? "music" : "video"} file</h2>
            <iframe
                className="button-api-frame"
                src={`https://api.vevioz.com/@api/button/${type}/${id}`}
                allowtransparency="true"
                scrolling="yes"
            />
        </div>
    )
}

export default DownloadButton
