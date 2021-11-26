import videojs from 'video.js'

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

    return new MarkerBar(player, { markers, barName: 'markerPoint' })
  }

  constructor(player, options) {
    super(player, options)
    this.enable()
  }

  enable = () => {
    this.on(['tap', 'click'], this.handleClick)
  }

  disable = () => {
    this.off(['tap', 'click'], this.handleClick)
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
    const demo = videojs.dom.createEl('div', {
      className: 'vjs-marker-bar-demo'
    })
    // videojs.dom.appendContent(bar, demo)
    bar.appendChild(demo)
    return bar
  }
}

videojs.registerComponent('MarkerBar', MarkerBar)

export default MarkerBar