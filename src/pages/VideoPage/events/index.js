import triggerEvent from './triggerEvent'
import EventTarget from './EventTarget'
import { EVENTS, events } from './events'

export {
  EVENTS,
  events,
  EventTarget,
  triggerEvent,
}

/**
 * 注册事件
  import { EVENTS, events } from '@/services/events'

  const addOrRemoveEventListener = 'removeEventListener' || 'addEventListener'
  const handler = (e) => todo()
  events[addOrRemoveEventListener](EVENTS.ACTIVE_VIEWPORT_STATUS, handler)

*/

/**
 * 触发事件
  import { EVENTS, events, triggerEvent } from '@/services/events'

  triggerEvent(events, EVENTS.ACTIVE_VIEWPORT_STATUS, {
    activeElement: this.element,
    cineTool: this.cineTool,
    viewport: this.state.viewport
  })

*/
