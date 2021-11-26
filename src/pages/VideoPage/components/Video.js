import React from 'react'
import videojs from 'video.js'
import MarkerPlugin from './plugins/MarkerPlugin'
import 'video.js/dist/video-js.css'
import './index.css'

videojs.registerPlugin('markerPlugin', MarkerPlugin)

const Video = (props) => {

  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const markerPluginRef = React.useRef(null)
  const { options, onReady } = props

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player)
      })
      window.player = player
      markerPluginRef.current = player.markerPlugin({
        markers: [
          {
            offset: 1,
            type: 'text',
            data: {
              content: 'content1'
            }
          },
          {
            offset: 2,
            type: 'text',
            data: {
              content: 'content2'
            }
          },
        ],
      })

    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [onReady, options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current
    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  const handleClick = () => {
    const player = playerRef.current
    console.log('player', player)
    // console.log('currentTime', player.currentTime(15))
    // console.log('duration', player.duration())
    // console.log('pause', player.pause())
    // console.log('play', player.play())
    const markerPlugin = markerPluginRef.current
    console.log('markerPlugin', markerPlugin)
  }

  return (
    <>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default Video