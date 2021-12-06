import CustomEventTarget from './EventTarget'
// Safari just doesn't allow you to use the EventTarget interface
// in your own objects other than DOM elements.
// So I simply replicated the class to do it.
// const EventTarget = window.EventTarget ? window.EventTarget : CustomEventTarget
const EventTarget = CustomEventTarget

export const EVENTS = {
  // global
  GLOBAL_ERROR_MESSAGE: 'GLOBAL_ERROR_MESSAGE',
}

export const events = new EventTarget()
