import videojs from 'video.js'
import { MarkerPoint } from './MarkerPoint'
const Component = videojs.getComponent('Component')

/**
 * Only the slider of the marker is displayed
 */
class MarkerBar extends Component {

  static build(player, options) {
    if (!(options.markers instanceof Array)) {
      options.markers = []
    }

    const markers = []

    for (let i = options.markers.length; i--;) {
      markers.push(new MarkerPoint(player, options.markers[i]))
    }

    return new MarkerBar(player, { markers, barName: 'markerPoint' })
  }

  constructor(player, options) {
    super(player, options)
    console.log('constructor', options)
    options.markers.forEach((marker) => this.addChild(marker))

    const duration = player.duration()
    if (Number.isNaN(duration)) {
      const onLoadedMetaData = () => {
        this.updatePosition(player, options)
        player.off('loadedmetadata', onLoadedMetaData)
      }
      player.on('loadedmetadata', onLoadedMetaData)
    } else {
      this.updatePosition(player, options)
    }
  }

  updatePosition = (player, options) => {
    const duration = player.duration()
    options.markers.forEach((marker) => {
      marker.updatePosition(duration)
    })
  }

  enable = () => {
    // this.on(['tap', 'click'], this.handleClick)
  }

  disable = () => {
    console.log('disable')
    // this.off(['tap', 'click'], this.handleClick)
  }

  handleClick = (e) => {
    console.log('handleClick', e)
  }

  /**
   * create dom element
   *
   * @return {*} dom
   */
  createEl() {
    const bar = videojs.dom.createEl('div', {
      className: 'vjs-marker-bar'
    })
    return bar
  }
}

videojs.registerComponent('MarkerBar', MarkerBar)

export default MarkerBar