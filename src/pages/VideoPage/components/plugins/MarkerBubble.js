/* eslint-disable */
import videojs from 'video.js'

const Component = videojs.getComponent('Component')

class MarkerBubble extends Component {

  constructor(player, options) {
    super(player, options)
    this.player = player

    this.handleMouseDownHandler_ = (e) => this.handleMouseDown(e);
    this.handleMouseUpHandler_ = (e) => this.handleMouseUp(e);
    this.handleMouseMoveHandler_ = (e) => this.handleMouseMove(e);
    this.enable()
  }

  enable() {
    this.on(['mousedown'], this.handleMouseDownHandler_);
    this.enabled_ = true;
  }

  handleMouseDown = () => {
    console.log('handleMouseDown', this.el_.ownerDocument, videojs.dom)
    const doc = this.el_.ownerDocument;
    // const seekBar = this.getChild('seekBar');

    this.on(doc, 'mousemove', this.handleMouseMoveHandler_);
    this.on(doc, 'mouseup', this.handleMouseUpHandler_);
  }

  handleMouseUp(event) {
    this.removeListenersAddedOnMousedownAndTouchstart();
  }

  handleMouseMove = (event) => {
    console.log('move', event)
    // const seekBar = this.getChild('seekBar');
    const seekBar = this.player.getDescendant([
      'ControlBar',
      'ProgressControl',
      'SeekBar'
    ])
    const Dom = videojs.dom
    const seekBarEl = seekBar.el();
    const seekBarRect = Dom.findPosition(seekBarEl);
    let seekBarPoint = Dom.getPointerPosition(seekBarEl, event).x;
    console.log('seekBar', seekBarPoint)
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