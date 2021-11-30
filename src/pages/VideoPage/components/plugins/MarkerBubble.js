/* eslint-disable */
import videojs from 'video.js'

const Component = videojs.getComponent('Component')

class MarkerBubble extends Component {

  constructor(player, options) {
    super(player, options)
    this.player = player
    this.options = options
    this.side = options.side
    this.addClass(this.side)
    this.handleMouseDownHandler_ = (e) => this.handleMouseDown(e);
    this.handleMouseUpHandler_ = (e) => this.handleMouseUp(e);
    this.handleMouseMoveHandler_ = (e) => this.handleMouseMove(e);
    this.enable()
  }

  enable() {
    this.on(['mousedown'], this.handleMouseDownHandler_);
    this.enabled_ = true;
  }

  handleMouseDown() {
    console.log('handleMouseDown', this.el_.ownerDocument, videojs.dom)
    const doc = this.el_.ownerDocument;
    // const seekBar = this.getChild('seekBar');

    this.on(doc, 'mousemove', this.handleMouseMoveHandler_);
    this.on(doc, 'mouseup', this.handleMouseUpHandler_);
  }

  handleMouseUp(event) {
    this.removeListenersAddedOnMousedownAndTouchstart();
    const { onConfirm, onReset } = this.options
    const offset = this.calcPosition(event)
    if (offset > 40 || offset < 5) {
      typeof onReset === 'function' && onReset(offset)
      return
    }
    typeof onConfirm === 'function' && onConfirm(offset)
  }

  handleMouseMove(event) {
    const offset = this.calcPosition(event)
    const { onChange } = this.options
    typeof onChange === 'function' && onChange(offset)
  }

  calcPosition(event) {
    const duration = this.player.duration()
    const seekBar = this.player.getDescendant([
      'ControlBar',
      'ProgressControl',
      'SeekBar'
    ])
    const Dom = videojs.dom
    const seekBarEl = seekBar.el();
    // const seekBarRect = Dom.findPosition(seekBarEl);
    let seekBarPoint = Dom.getPointerPosition(seekBarEl, event).x;
    return seekBarPoint * duration
  }

  removeListenersAddedOnMousedownAndTouchstart() {
    const doc = this.el_.ownerDocument;

    this.off(doc, 'mousemove', this.handleMouseMoveHandler_);
    this.off(doc, 'mouseup', this.handleMouseUpHandler_);
  }


  createEl() {
    return videojs.dom.createEl('div', {
      className: 'vjs-marker-bubble'
    })
  }

}

export default MarkerBubble