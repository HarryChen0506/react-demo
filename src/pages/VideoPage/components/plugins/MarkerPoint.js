/* eslint-disable */
import videojs from 'video.js'
import MarkerBubble from './MarkerBubble'

const Component = videojs.getComponent('Component')
const TimeTooltip = videojs.getComponent('TimeTooltip')

/**
 * use by {@link MarkerPoint}, defined content when mouse over {@link MarkerPoint}.
 */
class MarkerPointTip extends Component {

  /**
   * generate a {@link MarkerPoint} instance
   *
   * @param {Player} player videojs instance
   * @param {Object} options options
   * @param {number} options.offset offset form zero of video. unit(second)
   * @param {Object} options.data content of `options.type`
   */
  constructor(player, options) {
    super(player, options)

    this.options = options

    this.timeToltip = new TimeTooltip(player)
    this.timeToltip.hide()

    this.addChild(this.timeToltip)
    this.addClass('vjs-marker-point-tip')

    this.timeToltip.el_.innerHTML = `
      <p class="vjs-marker-point-tip-time">${videojs.formatTime(this.options.offset, 600)}</p>
      <p class="vjs-marker-point-tip-content">${this.options.data.content}</p>
    `
  }

  /**
   * refresh tip position
   * call this when init or window resize.
   */
  updatePosition() {
    this.timeToltip.el_.style.left = `-${this.timeToltip.el_.getBoundingClientRect().width / 2}px`
  }
}

/**
 * {@link MarkerPoint} is point displayed in the {@link MarkerBar}
 */
class MarkerPoint extends Component {

  /**
   * generate a {@link MarkerPoint} instance
   *
   * @param {Player} player videojs player instance
   * @param {Object} options options
   * @param {number} options.offset offset form zero of video. unit(second)
   * @param {string} options.type when mouse hover the {@link MarkerPoint}, the type of information displayed
   * @param {Object} options.data content of `options.type`
   */
  constructor(player, options) {
    super(player, options)

    this.offset = options.offset
    this.start = options.start
    this.end = options.end
    this.type = options.type
    this.data = options.data
    this.cacheStart = options.start
    this.cacheEnd = options.end
    // console.log('constructor', options)


    // this.tip = new MarkerPointTip(player, {
    //   data: this.data,
    //   offset: this.offset
    // })
    // this.mouseDisplay = player.getDescendant(['ControlBar', 'ProgressControl', 'SeekBar', 'MouseTimeDisplay'])

    // this.addChild(this.tip)
    // this.enableTouchActivity()
    // this.on('mouseenter', (ev) => {
    //   this.mouseDisplay.hide()
    //   this.tip.timeToltip.show()
    //   this.tip.updatePosition()
    // })
    // this.on('mouseleave', (ev) => {
    //   this.mouseDisplay.show()
    //   this.tip.timeToltip.hide()
    // })


    this.leftBubble = new MarkerBubble(
      player,
      {
        side: 'left',
        onChange: (e) => {
          this.start = e
          this.refreshPosition()
        },
        onConfirm: (e) => {
          this.start = e
          this.refreshPosition()
        },
        onReset: () => {
          this.resetPosition()
        }
      }
    )
    this.rightBubble = new MarkerBubble(
      player,
      {
        side: 'right',
        onChange: (e) => {
          this.end = e
          this.refreshPosition()
        },
        onConfirm: (e) => {
          this.end = e
          this.refreshPosition()
        },
        onReset: () => {
          this.resetPosition()
        }
      })
    this.addChild(this.leftBubble)
    this.addChild(this.rightBubble)
  }

  refreshPosition() {
    const duration = player.duration()
    this.updatePosition(duration)
  }

  resetPosition() {
    this.start = this.cacheStart
    this.end = this.cacheEnd
    console.log('reset', [this.start, this.end])

    this.refreshPosition()
  }

  /**
   * create dom element
   *
   * @return {*} dom
   */
  createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-marker-point'
    })
  }

  /**
   * refresh tip position
   * call this when init or window resize.
   *
   * @param {number} duration current video duration
   */
  updatePosition(duration) {
    console.log('updatePosition', [this.start, this.end], duration)
    this.el_.style.left = (this.start / duration * 100) + '%'
    this.el_.style.width = ((this.end - this.start) / duration * 100) + '%'
  }


}

export {
  MarkerPoint,
  MarkerPointTip
}