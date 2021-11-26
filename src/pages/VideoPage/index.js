import React from 'react'
import Video from './components/Video.js'
import './index.css'

const PageVideo = (() => {
  const playerRef = React.useRef(null)

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: false,
    width: 600,
    height: 400,
    muted: true,
    inactivityTimeout: 0,
    sources: [{
      src: '//vjs.zencdn.net/v/oceans.mp4',
    }],
    controlBar: {
      children: [
        { name: 'playToggle' }, // 播放/暂停按钮
        { name: 'progressControl' }, // 播放进度条
        // { name: 'currentTimeDisplay' }, // 视频当前已播放时间
        // { name: 'timeDivider' },
        // { name: 'durationDisplay' }, // 视频播放总时间
        { name: 'remainingTimeDisplay' }, // 视频当前已播放时间
        {
          name: 'volumePanel', // 音量控制
          inline: false, // 不使用水平方式
        },
        { name: 'FullscreenToggle' } // 全屏
      ]
    }
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  return (
    <div>
      <h3> video demo </h3>
      <div className='video-container'>
        <Video options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  )
})

export default PageVideo
