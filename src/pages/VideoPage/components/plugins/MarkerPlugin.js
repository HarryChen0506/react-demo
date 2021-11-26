import videojs from 'video.js'
import MarkerBar from './MarkerBar'

const Plugin = videojs.getPlugin('plugin')
const defaults = {}

class MarkerPlugin extends Plugin {
  constructor(player, options) {
    super(player, options)
    this.options = videojs.mergeOptions(defaults, options)

    this.player.addClass('vjs-marker-plugin')

    this.updateOptions()
  }

  createMarkerBar() {
    this.markerBar = MarkerBar.build(this.player, {
      markers: this.options.markers
    })
    return this.markerBar
  }

  updateOptions(options) {
    this.options = videojs.mergeOptions(this.options, options)
    if (this.markerBar) this.markerBar.dispose()
    this.createMarkerBar()

    const container = this.player.getDescendant([
      'ControlBar',
      // 'ProgressControl',
      // 'SeekBar'
    ])
    // container.addChild(this.markerBar)
    const controlBar = this.player.controlBar
    const properIndex = controlBar.children().indexOf(controlBar.getChild('ProgressControl'))
    container.addChild(this.markerBar, {}, properIndex)

  }

}

export default MarkerPlugin