import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null)


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={() => setPlayState(false)}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer